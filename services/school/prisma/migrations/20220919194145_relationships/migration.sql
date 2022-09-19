/*
  Warnings:

  - You are about to drop the column `activity_kind` on the `ParticipantInformationConfiguration` table. All the data in the column will be lost.
  - Made the column `fuelMyClubActivityId` on table `FuelMyClubFundraiser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FuelMyClubFundraiser" ALTER COLUMN "fuelMyClubActivityId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ParticipantInformationConfiguration" DROP COLUMN "activity_kind",
ADD COLUMN     "activityKind" TEXT;

-- CreateTable
CREATE TABLE "Settlement" (
    "id" TEXT NOT NULL,
    "activityId" TEXT,
    "schoolId" TEXT,
    "startDate" DATE,
    "endDate" DATE,
    "amountCollected" INTEGER,
    "fees" INTEGER,
    "amountSettled" INTEGER,
    "percentage" INTEGER,
    "amountPaid" INTEGER,
    "amountRemaining" INTEGER,
    "final" BOOLEAN,
    "flatFee" INTEGER,
    "percentageFee" INTEGER,
    "manualFee" INTEGER,
    "participantCount" INTEGER,
    "kind" INTEGER DEFAULT 0,
    "approval" INTEGER DEFAULT 0,
    "activityKind" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settlement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FuelMyClubActivity" ADD CONSTRAINT "FuelMyClubActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelMyClubFundraiser" ADD CONSTRAINT "FuelMyClubFundraiser_fuelMyClubActivityId_fkey" FOREIGN KEY ("fuelMyClubActivityId") REFERENCES "FuelMyClubActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Settlement" ADD CONSTRAINT "Settlement_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
