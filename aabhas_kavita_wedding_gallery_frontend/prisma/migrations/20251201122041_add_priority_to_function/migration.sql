-- AlterTable
ALTER TABLE `Function` ADD COLUMN `priority` INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX `Function_priority_idx` ON `Function`(`priority`);
