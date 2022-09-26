/*
  Warnings:

  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Relationship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CampTshirtOrder" DROP CONSTRAINT "CampTshirtOrder_coachId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_participantId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_registeredById_fkey";

-- DropForeignKey
ALTER TABLE "Relationship" DROP CONSTRAINT "Relationship_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Relationship" DROP CONSTRAINT "Relationship_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "TicketRegistration" DROP CONSTRAINT "TicketRegistration_studentId_fkey";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "Relationship";

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
    "fuelMyClubActivityId" TEXT NOT NULL,
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
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "name" TEXT,
    "level" TEXT,
    "gender" TEXT,
    "a2kSiteschoolsportId" INTEGER,
    "sportName" TEXT,
    "rosterwebserviceAccess" BOOLEAN DEFAULT false,
    "state" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "Venture" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "type" TEXT,
    "gender" TEXT,
    "grade" TEXT,
    "basePrice" INTEGER,
    "nonDistrictBasePrice" INTEGER,
    "registrationStart" DATE,
    "registrationEnd" DATE,
    "director" TEXT,
    "directorBio" TEXT,
    "registerable" BOOLEAN DEFAULT false,
    "maxNumberOfParticipants" INTEGER DEFAULT 0,
    "location" TEXT,
    "cancelled" BOOLEAN DEFAULT false,
    "state" INTEGER DEFAULT 0,
    "season" TEXT,
    "sourceVentureId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Venture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FuelMyClubActivity_activityId_key" ON "FuelMyClubActivity"("activityId");

-- AddForeignKey
ALTER TABLE "FuelMyClubFundraiser" ADD CONSTRAINT "FuelMyClubFundraiser_fuelMyClubActivityId_fkey" FOREIGN KEY ("fuelMyClubActivityId") REFERENCES "FuelMyClubActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
