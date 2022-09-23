/*
  Warnings:

  - Added the required column `name` to the `Fee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fee" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Phone" ADD COLUMN     "number" TEXT;
