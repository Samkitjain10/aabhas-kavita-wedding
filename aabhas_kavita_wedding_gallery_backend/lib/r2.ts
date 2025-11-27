import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

// Cloudflare R2 configuration
const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
})

const BUCKET_NAME = process.env.R2_BUCKET_NAME || ''
const PUBLIC_URL = process.env.R2_PUBLIC_URL || '' // Your R2 custom domain or public URL

/**
 * Check if R2 is configured
 */
export function isR2Configured(): boolean {
  return !!(
    process.env.R2_ENDPOINT &&
    process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET_NAME &&
    process.env.R2_ACCESS_KEY_ID !== 'your-r2-access-key-id' &&
    process.env.R2_SECRET_ACCESS_KEY !== 'your-r2-secret-access-key'
  )
}

/**
 * Upload a file to Cloudflare R2
 */
export async function uploadToR2(
  file: File,
  fileName: string
): Promise<string> {
  if (!isR2Configured()) {
    throw new Error('R2 is not configured')
  }

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  // Generate a unique file name
  const timestamp = Date.now()
  const safeFileName = fileName.replace(/[^a-zA-Z0-9.\-_]/g, '_')
  const key = `uploads/${timestamp}-${safeFileName}`

  try {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type,
      // Make file publicly accessible if using public bucket
      // ACL: 'public-read', // Uncomment if your R2 bucket allows public access
    })

    await r2Client.send(command)

    // Return public URL or generate signed URL
    if (PUBLIC_URL) {
      // If you have a custom domain or public URL configured
      // Remove trailing slash if present
      const baseUrl = PUBLIC_URL.replace(/\/$/, '')
      return `${baseUrl}/${key}`
    } else {
      // Generate a signed URL (max 7 days for S3/R2 compatibility)
      // Note: For production, set R2_PUBLIC_URL with a custom domain for permanent URLs
      const getCommand = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      })
      const signedUrl = await getSignedUrl(r2Client, getCommand, {
        expiresIn: 60 * 60 * 24 * 7, // 7 days (max allowed for signed URLs)
      })
      return signedUrl
    }
  } catch (error) {
    console.error('R2 upload error:', error)
    throw new Error(`Failed to upload to R2: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Generate a signed URL for an R2 object (for private files)
 */
export async function getR2SignedUrl(key: string, expiresIn: number = 3600): Promise<string> {
  if (!isR2Configured()) {
    throw new Error('R2 is not configured')
  }

  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  })

  const signedUrl = await getSignedUrl(r2Client, command, { expiresIn })
  return signedUrl
}

