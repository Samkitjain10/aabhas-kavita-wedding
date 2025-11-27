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
    process.env.R2_BUCKET_NAME
  )
}

/**
 * Upload a file to Cloudflare R2
 */
export async function uploadToR2(file: File, fileName: string): Promise<string> {
  if (!isR2Configured()) {
    throw new Error('R2 is not configured')
  }

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  // Generate unique filename with timestamp
  const timestamp = Date.now()
  const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_')
  const key = `uploads/${timestamp}-${sanitizedFileName}`

  // Upload to R2
  await r2Client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type || 'application/octet-stream',
    })
  )

  // Return the public URL or signed URL
  if (PUBLIC_URL) {
    // If you have a custom domain, use it
    return `${PUBLIC_URL}/${key}`
  } else {
    // Generate a signed URL (valid for 7 days)
    const signedUrl = await getSignedUrl(
      r2Client,
      new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      }),
      { expiresIn: 604800 } // 7 days in seconds
    )
    return signedUrl
  }
}

/**
 * Get a signed URL for an R2 object
 */
export async function getR2SignedUrl(key: string, expiresIn: number = 604800): Promise<string> {
  if (!isR2Configured()) {
    throw new Error('R2 is not configured')
  }

  return await getSignedUrl(
    r2Client,
    new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    }),
    { expiresIn }
  )
}

