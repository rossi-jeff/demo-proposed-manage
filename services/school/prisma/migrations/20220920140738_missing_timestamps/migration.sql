/*
  Warnings:

  - Added the required column `createdAt` to the `ActivityFee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ActivityFee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Color` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActivityFee" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Color" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
