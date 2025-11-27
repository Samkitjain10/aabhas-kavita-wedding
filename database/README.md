# Database Backup

This folder contains the database schema, migrations, and backup files.

## Contents

- `prisma/` - Prisma schema and migration files
  - `schema.prisma` - Database schema definition
  - `migrations/` - Database migration history
  - `seed.ts` - Database seeding script
- `wedding_gallery_backup.sql` - MySQL database dump
- `wedding_gallery_backup.zip` - Compressed Prisma folder backup
- `backup_instructions.txt` - Instructions for creating/restoring backups

## Creating a Database Backup

To create a fresh MySQL backup:

```bash
mysqldump -u root wedding_gallery > wedding_gallery_backup.sql
```

Or with password prompt:
```bash
mysqldump -u root -p wedding_gallery > wedding_gallery_backup.sql
```

## Restoring Database

To restore from backup:

```bash
mysql -u root wedding_gallery < wedding_gallery_backup.sql
```

Or with password prompt:
```bash
mysql -u root -p wedding_gallery < wedding_gallery_backup.sql
```

## Database Schema

The database includes:
- **User** - Phone number-based authentication
- **Function** - Wedding function/event names
- **Media** - Photos and videos with R2 URLs

