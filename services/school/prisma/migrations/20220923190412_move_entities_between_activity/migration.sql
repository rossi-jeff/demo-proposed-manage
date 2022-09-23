/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FuelMyClubActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FuelMyClubFundraiser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GroupAward` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Venture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_activityId_fkey";

-- DropForeignKey
ALTER TABLE "FuelMyClubActivity" DROP CONSTRAINT "FuelMyClubActivity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "FuelMyClubFundraiser" DROP CONSTRAINT "FuelMyClubFundraiser_fuelMyClubActivityId_fkey";

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_activityId_fkey";

-- DropForeignKey
ALTER TABLE "GroupAward" DROP CONSTRAINT "GroupAward_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Venture" DROP CONSTRAINT "Venture_activityId_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "FuelMyClubActivity";

-- DropTable
DROP TABLE "FuelMyClubFundraiser";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "GroupAward";

-- DropTable
DROP TABLE "Venture";

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,
    "schoolId" TEXT,
    "allowedToLogin" BOOLEAN DEFAULT false,
    "firstName" TEXT,
    "lastName" TEXT,
    "sex" TEXT,
    "birthDate" DATE,
    "highSchoolGraduationYear" TEXT,
    "insuranceCompany" TEXT,
    "insuranceAccountNumber" TEXT,
    "physicianName" TEXT,
    "physicianPhone" TEXT,
    "studentId" TEXT,
    "schoolTransferredFrom" TEXT,
    "medicalInformation" TEXT,
    "acceptsCOPPA" BOOLEAN,
    "optsInToCommunications" BOOLEAN DEFAULT true,
    "physicalDate" DATE,
    "credit" INTEGER,
    "ethnicity" TEXT,
    "firstEnrollmentDate" DATE,
    "participationStatus" TEXT,
    "gpa" DOUBLE PRECISION,
    "felonyInfo" INTEGER DEFAULT 0,
    "notifications" INTEGER DEFAULT 31,
    "concussionTestDate" DATE,
    "adData" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relationship" (
    "id" TEXT NOT NULL,
    "subjectId" TEXT,
    "receiverId" TEXT,
    "relationshipType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Relationship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PersonAddress" ADD CONSTRAINT "PersonAddress_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonEmail" ADD CONSTRAINT "PersonEmail_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonPhone" ADD CONSTRAINT "PersonPhone_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonRole" ADD CONSTRAINT "PersonRole_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
