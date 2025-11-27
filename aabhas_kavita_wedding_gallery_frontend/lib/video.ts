import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

let ffmpegInstance: FFmpeg | null = null
let ffmpegLoaded = false

async function getFFmpeg(): Promise<FFmpeg> {
  if (ffmpegInstance && ffmpegLoaded) {
    return ffmpegInstance
  }

  if (!ffmpegInstance) {
    ffmpegInstance = new FFmpeg()
    
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      ffmpegInstance.on('log', ({ message }) => {
        console.log('FFmpeg:', message)
      })
    }
  }

  if (!ffmpegLoaded) {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'
    await ffmpegInstance.load({
      coreURL: await fetchFile(`${baseURL}/ffmpeg-core.js`),
      wasmURL: await fetchFile(`${baseURL}/ffmpeg-core.wasm`),
    })
    ffmpegLoaded = true
  }

  return ffmpegInstance
}

export async function compressVideo(
  file: File,
  onProgress?: (progress: number) => void
): Promise<File> {
  const ffmpeg = await getFFmpeg()

  const inputName = `input-${Date.now()}.mp4`
  const outputName = `output-${Date.now()}.mp4`

  await ffmpeg.writeFile(inputName, await fetchFile(file))
  onProgress?.(10)

  await ffmpeg.exec([
    '-i',
    inputName,
    '-vcodec',
    'libx264',
    '-crf',
    '28',
    '-preset',
    'medium',
    '-vf',
    'scale=min(1080,iw):min(1080,ih):force_original_aspect_ratio=decrease',
    '-c:a',
    'aac',
    '-b:a',
    '128k',
    outputName
  ])

  onProgress?.(90)

  const data = await ffmpeg.readFile(outputName)
  await ffmpeg.deleteFile(inputName)
  await ffmpeg.deleteFile(outputName)

  onProgress?.(100)

  const blob = new Blob([data], { type: 'video/mp4' })
  return new File([blob], file.name.replace(/\.[^/.]+$/, '.mp4'), {
    type: 'video/mp4',
    lastModified: Date.now(),
  })
}

