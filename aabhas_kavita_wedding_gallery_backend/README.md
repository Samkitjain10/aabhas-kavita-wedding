# Ankita & Sahil Wedding Gallery - Backend

This is the backend API server for the wedding gallery.

## Structure

- `api/` - Next.js API routes
  - `/api/login` - User authentication
  - `/api/upload` - File upload to R2
  - `/api/download/[id]` - File download proxy
  - `/api/functions` - Wedding functions CRUD
  - `/api/media/[id]` - Media retrieval
- `lib/` - Server utilities
  - `auth.ts` - JWT session management
  - `prisma.ts` - Database client
  - `r2.ts` - Cloudflare R2 integration
  - `utils.ts` - Utility functions
- `middleware.ts` - Route protection
- `prisma/` - Database schema and migrations

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with:
```
DATABASE_URL="mysql://root@localhost:3306/wedding_gallery"
JWT_SECRET="your-secret-key"
R2_ENDPOINT="https://your-account-id.r2.cloudflarestorage.com"
R2_ACCESS_KEY_ID="your-access-key"
R2_SECRET_ACCESS_KEY="your-secret-key"
R2_BUCKET_NAME="your-bucket-name"
R2_PUBLIC_URL="https://your-custom-domain.com" (optional)
```

3. Setup database:
```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

4. Run development server:
```bash
npm run dev
```

## Dependencies

- Next.js 16.0.4 (API routes)
- Prisma (ORM)
- Cloudflare R2 (S3-compatible storage)
- Jose (JWT)

