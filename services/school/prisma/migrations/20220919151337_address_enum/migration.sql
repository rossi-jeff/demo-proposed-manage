/*
  Warnings:

  - Added the required column `type` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AddresTypeEnum" AS ENUM ('PERSONAL', 'BUSINESS');

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "type" "AddresTypeEnum" NOT NULL;
