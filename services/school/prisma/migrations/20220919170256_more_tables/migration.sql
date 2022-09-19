/*
  Warnings:

  - Added the required column `createdAt` to the `PersonRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PersonRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `SchoolAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SchoolAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `SchoolEmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SchoolEmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `SchoolFee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SchoolFee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `SchoolPhone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SchoolPhone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PersonRole" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SchoolAddress" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SchoolEmail" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SchoolFee" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SchoolPhone" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "CoachCertification" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "value" TEXT,
    "state" TEXT,
    "code" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoachCertification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomDiscount" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "kind" TEXT,
    "condition" INTEGER,
    "active" BOOLEAN DEFAULT true,
    "discountedFee" INTEGER,
    "activityId" TEXT,
    "secondaryCondition" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomDiscount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomQuestion" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "state" TEXT,
    "question" TEXT,
    "questionType" TEXT,
    "questionOptions" TEXT,
    "active" BOOLEAN,
    "required" BOOLEAN DEFAULT false,
    "dependentOn" INTEGER,
    "dependentAnswer" TEXT,
    "sortOrder" INTEGER,
    "activityType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomQuestion_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "LegalForm" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "name" TEXT,
    "checkboxText" TEXT,
    "emailToChild" BOOLEAN,
    "file" TEXT,
    "requireStudentSignOff" BOOLEAN,
    "state" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalVideo" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "name" TEXT,
    "checkboxText" TEXT,
    "remoteId" TEXT,
    "requireStudentSignOff" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalForm" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "name" TEXT,
    "file" TEXT,
    "freshmanOnly" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipantInformationConfiguration" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "key" TEXT,
    "visible" BOOLEAN,
    "required" BOOLEAN,
    "activity_kind" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParticipantInformationConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentCode" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "name" TEXT,
    "code" TEXT,
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentCode_pkey" PRIMARY KEY ("id")
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

-- AddForeignKey
ALTER TABLE "CustomDiscount" ADD CONSTRAINT "CustomDiscount_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantInformationConfiguration" ADD CONSTRAINT "ParticipantInformationConfiguration_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venture" ADD CONSTRAINT "Venture_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
