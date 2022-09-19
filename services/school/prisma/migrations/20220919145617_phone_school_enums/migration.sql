/*
  Warnings:

  - Added the required column `TYPE` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Phone` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PhoneTypeEnum" AS ENUM ('HOME', 'OFFICE', 'FAX', 'CELL');

-- CreateEnum
CREATE TYPE "EmailTypeEnum" AS ENUM ('PERSONAL', 'BUSINESS');

-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "TYPE" "EmailTypeEnum" NOT NULL;

-- AlterTable
ALTER TABLE "Phone" ADD COLUMN     "type" "PhoneTypeEnum" NOT NULL;
