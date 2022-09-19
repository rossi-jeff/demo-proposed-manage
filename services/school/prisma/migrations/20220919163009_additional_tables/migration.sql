/*
  Warnings:

  - You are about to drop the column `TYPE` on the `Email` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FeeTypeEnum" AS ENUM ('FLAT', 'PERCENTAGE');

-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "active" BOOLEAN DEFAULT true,
ADD COLUMN     "archived" BOOLEAN DEFAULT false,
ADD COLUMN     "athleticSeason" TEXT DEFAULT 'none',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "currentSeason" TEXT DEFAULT 'current season',
ADD COLUMN     "emailFooter" TEXT,
ADD COLUMN     "kind" TEXT,
ADD COLUMN     "leadInMessage" TEXT,
ADD COLUMN     "noCut" BOOLEAN DEFAULT false,
ADD COLUMN     "registerable" BOOLEAN DEFAULT false,
ADD COLUMN     "schoolId" TEXT NOT NULL,
ADD COLUMN     "steps" INTEGER DEFAULT 0,
ADD COLUMN     "termsAndConditions" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Email" DROP COLUMN "TYPE",
ADD COLUMN     "type" "EmailTypeEnum" NOT NULL;

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "registerable" BOOLEAN DEFAULT false,
    "director" TEXT,
    "startTime" TIME,
    "endTime" TIME,
    "studentOnly" BOOLEAN DEFAULT false,
    "location" TEXT,
    "registrationStart" DATE,
    "registrationEnd" DATE,
    "cancelled" BOOLEAN DEFAULT false,
    "state" INTEGER DEFAULT 0,
    "eventDate" DATE,
    "maxTicketCapacity" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Award" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "name" TEXT,
    "position" INTEGER,
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fee" (
    "id" TEXT NOT NULL,
    "type" "FeeTypeEnum" NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityFee" (
    "id" TEXT NOT NULL,
    "feeId" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,

    CONSTRAINT "ActivityFee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolPhone" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,

    CONSTRAINT "SchoolPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolEmail" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,

    CONSTRAINT "SchoolEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolAddress" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "SchoolAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolFee" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "feeId" TEXT NOT NULL,

    CONSTRAINT "SchoolFee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonRole" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "PersonRole_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityFee" ADD CONSTRAINT "ActivityFee_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityFee" ADD CONSTRAINT "ActivityFee_feeId_fkey" FOREIGN KEY ("feeId") REFERENCES "Fee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolPhone" ADD CONSTRAINT "SchoolPhone_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolEmail" ADD CONSTRAINT "SchoolEmail_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolAddress" ADD CONSTRAINT "SchoolAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolFee" ADD CONSTRAINT "SchoolFee_feeId_fkey" FOREIGN KEY ("feeId") REFERENCES "Fee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
