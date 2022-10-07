/*
  Warnings:

  - You are about to drop the column `banner_year` on the `RecordAssignment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RecordAssignment" DROP COLUMN "banner_year",
ADD COLUMN     "bannerYear" TEXT;
