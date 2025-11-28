/**
 * Video compression function - currently disabled
 * Videos are uploaded as-is to R2 storage which can handle large files.
 * Client-side video compression was causing issues with FFmpeg and Turbopack.
 * 
 * If server-side compression is needed in the future, it should be implemented
 * on the backend after upload.
 */
export async function compressVideo(
  file: File,
  onProgress?: (progress: number) => void
): Promise<File> {
  // Skip compression - upload videos as-is
  // R2 can handle large files, and client-side compression is unreliable
  onProgress?.(100)
  return file
}

