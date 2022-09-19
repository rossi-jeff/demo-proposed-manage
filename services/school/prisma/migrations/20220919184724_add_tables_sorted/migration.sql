/*
  Warnings:

  - Added the required column `createdAt` to the `Fee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Fee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fee" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "ActivityLegalForm" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "legalFormId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityLegalForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectingRole" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectingRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureForSeason" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT,
    "season" TEXT,
    "feature" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeatureForSeason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelMyClubActivity" (
    "id" TEXT NOT NULL,
    "activityId" TEXT,
    "externalFmcOrganizationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FuelMyClubActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelMyClubFundraiser" (
    "id" TEXT NOT NULL,
    "fuelMyClubActivityId" TEXT,
    "season" TEXT,
    "externalFmcFundraiserId" TEXT,
    "contactPersonId" TEXT,
    "config" INTEGER DEFAULT 0,
    "leadInMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FuelMyClubFundraiser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelMyClubOrganization" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT,
    "data" TEXT,
    "fmcOrganization" TEXT,
    "fmcFundraiser" TEXT,
    "fmcParticipant" TEXT,
    "salesLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FuelMyClubOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupAward" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "name" TEXT,
    "state" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupAward_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FuelMyClubActivity_activityId_key" ON "FuelMyClubActivity"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "FuelMyClubOrganization_schoolId_key" ON "FuelMyClubOrganization"("schoolId");

-- AddForeignKey
ALTER TABLE "ActivityLegalForm" ADD CONSTRAINT "ActivityLegalForm_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityLegalForm" ADD CONSTRAINT "ActivityLegalForm_legalFormId_fkey" FOREIGN KEY ("legalFormId") REFERENCES "LegalForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectingRole" ADD CONSTRAINT "DirectingRole_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupAward" ADD CONSTRAINT "GroupAward_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
