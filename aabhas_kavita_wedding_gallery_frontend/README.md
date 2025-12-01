# Aabhas & Kavita Wedding Gallery - Frontend

This is the frontend application for the wedding gallery.

## Structure

- `app/` - Next.js pages and routes (excluding API routes)
- `components/` - React components (UI, modals, grids, etc.)
- `public/` - Static assets (images, logos)
- `globals.css` - Global styles
- `layout.tsx` - Root layout component

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with:
```
NEXT_PUBLIC_API_URL=http://localhost:3002
```

3. Run development server:
```bash
npm run dev
```

## Dependencies

- Next.js 16.0.4
- React 19.2.0
- Tailwind CSS
- Framer Motion (animations)
- FFmpeg.wasm (video compression)
- Browser Image Compression

