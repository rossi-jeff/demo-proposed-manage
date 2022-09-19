/*
  Warnings:

  - Added the required column `createdAt` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `PersonAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PersonAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `PersonEmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PersonEmail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `PersonPhone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PersonPhone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PersonAddress" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PersonEmail" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PersonPhone" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Affiliation" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "schoolId" TEXT,
    "affiliationType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Affiliation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlergicCondition" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "allergyCondition" TEXT,
    "severity" TEXT,
    "reaction" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlergicCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AwardAssignment" (
    "id" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "awardId" TEXT NOT NULL,
    "state" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AwardAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampShortOrder" (
    "id" TEXT NOT NULL,
    "campTShirtOrderId" TEXT,
    "designLayout" TEXT,
    "designChoice" TEXT,
    "topLineText" TEXT,
    "bottomLineText" TEXT,
    "shortSizes" TEXT,
    "participants" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampShortOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampTshirtOrder" (
    "id" TEXT NOT NULL,
    "ventureId" TEXT,
    "coachId" TEXT,
    "schoolId" TEXT,
    "season" TEXT,
    "organizationName" TEXT,
    "ventureName" TEXT,
    "organizationColor1" TEXT,
    "organizationColor2" TEXT,
    "coachName" TEXT,
    "coachEmail" TEXT,
    "coachPhoneNumber" TEXT,
    "deliveryDate" DATE,
    "campDataSubmitted" BOOLEAN DEFAULT false,
    "orderDate" DATE,
    "template" TEXT,
    "topLineText" TEXT,
    "middleLineText" TEXT,
    "bottomLineText" TEXT,
    "tShirtColor" TEXT,
    "orderOptions" INTEGER,
    "shirtSizes" TEXT,
    "participants" TEXT,
    "tShirtQuantity" INTEGER,
    "overfillPercentage" INTEGER,
    "mascotFile" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampTshirtOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consent" (
    "id" TEXT NOT NULL,
    "legalFormId" INTEGER NOT NULL,
    "registrationId" INTEGER NOT NULL,
    "accepted" BOOLEAN,
    "checkboxText" TEXT,
    "sha1" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomAnswer" (
    "id" TEXT NOT NULL,
    "personId" INTEGER,
    "questionId" INTEGER,
    "answer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "id" TEXT NOT NULL,
    "personId" INTEGER,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT,
    "relationship" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelMyClubRegistration" (
    "id" TEXT NOT NULL,
    "registrationId" TEXT,
    "data" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FuelMyClubRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupAwardAssignment" (
    "id" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "awardId" TEXT NOT NULL,
    "state" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupAwardAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupRegistration" (
    "id" TEXT NOT NULL,
    "registrationId" INTEGER,
    "groupId" INTEGER,
    "rosterId" INTEGER,
    "finalizeDate" DATE,
    "jerseyNumber" TEXT,
    "position" TEXT,
    "state" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invite" (
    "id" TEXT NOT NULL,
    "personId" TEXT,
    "invitedById" TEXT,
    "schoolId" TEXT,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "secret" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "personId" TEXT,
    "credit" INTEGER DEFAULT 0,
    "invoiceTransactionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceTransaction" (
    "id" TEXT NOT NULL,
    "remoteId" TEXT,
    "status" TEXT,
    "invoiceId" TEXT,
    "paymentType" TEXT,
    "adminFlag" BOOLEAN DEFAULT true,
    "problemStatusAt" TIMESTAMP(3),
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvoiceTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalVideoConsent" (
    "id" TEXT NOT NULL,
    "legalVideoId" INTEGER,
    "personId" INTEGER,
    "season" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalVideoConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineItem" (
    "id" TEXT NOT NULL,
    "registrationId" TEXT,
    "ventureId" TEXT,
    "activityName" TEXT,
    "ventureName" TEXT,
    "price" INTEGER,
    "invoiceId" TEXT,
    "refunded" BOOLEAN DEFAULT false,
    "paid" BOOLEAN DEFAULT false,
    "refundAmount" INTEGER DEFAULT 0,
    "ticketKind" TEXT,
    "eventName" TEXT,
    "ticketId" TEXT,
    "state" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LineItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineItemInvoice" (
    "id" TEXT NOT NULL,
    "lineItemId" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LineItemInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalCondition" (
    "id" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,
    "name" TEXT,
    "physician" TEXT,
    "dateOfDiagnosis" DATE,
    "emergencyPlan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "schoolId" INTEGER,
    "activityId" INTEGER,
    "ventureId" INTEGER,
    "status" TEXT,
    "message" TEXT,
    "groupId" INTEGER,
    "senderId" INTEGER,
    "eventId" INTEGER,
    "messageType" INTEGER DEFAULT 0,
    "superadminMessage" BOOLEAN DEFAULT false,
    "documentFileName" TEXT,
    "documentContentType" TEXT,
    "documentFileSize" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessagePerson" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MessagePerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Occurance" (
    "id" TEXT NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "ventureId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Occurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "groupId" INTEGER,
    "sportCode" TEXT,
    "title" TEXT,
    "recordCode" TEXT,
    "unit" TEXT,
    "kind" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordAssignment" (
    "id" TEXT NOT NULL,
    "recipientId" INTEGER,
    "rosterId" INTEGER,
    "recordId" INTEGER,
    "recordSetDate" DATE,
    "result" DOUBLE PRECISION,
    "state" INTEGER DEFAULT 0,
    "banner_year" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" TEXT NOT NULL,
    "activityId" TEXT,
    "participantId" TEXT,
    "registeredById" TEXT,
    "paid" BOOLEAN DEFAULT false,
    "season" TEXT,
    "groupId" TEXT,
    "tShirtSize" TEXT,
    "weight" INTEGER,
    "height" INTEGER,
    "comment" TEXT,
    "tryout" BOOLEAN DEFAULT false,
    "state" INTEGER DEFAULT 0,
    "paymentOptionsComment" TEXT,
    "participationStatus" TEXT,
    "paymentCodeId" TEXT,
    "shortSize" TEXT,
    "equipmentJerseySize" TEXT,
    "equipmentPantSize" TEXT,
    "equipmentJacketSize" TEXT,
    "equipmentShoeSize" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "Roster" (
    "id" TEXT NOT NULL,
    "groupId" TEXT,
    "season" TEXT,
    "final" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Roster_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "SubLineItem" (
    "id" TEXT NOT NULL,
    "lineItemId" TEXT,
    "type" TEXT,
    "amount" INTEGER,
    "settledAt" TIMESTAMP(3),
    "remoteId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubLineItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "eventId" TEXT,
    "kind" TEXT,
    "basePrice" INTEGER,
    "maxNumberOfTickets" INTEGER,
    "state" INTEGER DEFAULT 0,
    "title" VARCHAR(40),
    "groupSize" INTEGER DEFAULT 1,
    "commentsEnabled" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketRegistration" (
    "id" TEXT NOT NULL,
    "registrationId" TEXT,
    "ticketId" TEXT,
    "state" INTEGER DEFAULT 0,
    "ticketholderFirstName" TEXT,
    "ticketEmail" TEXT,
    "studentId" TEXT,
    "lineItemId" TEXT,
    "confirmationNumber" TEXT,
    "ticketholderLastName" TEXT,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TicketRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VentureRegistration" (
    "id" TEXT NOT NULL,
    "registrationId" TEXT,
    "ventureId" TEXT,
    "state" INTEGER DEFAULT 0,
    "comment" TEXT,
    "paymentCodeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VentureRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FuelMyClubRegistration_registrationId_key" ON "FuelMyClubRegistration"("registrationId");

-- CreateIndex
CREATE UNIQUE INDEX "InvoiceTransaction_invoiceId_key" ON "InvoiceTransaction"("invoiceId");

-- AddForeignKey
ALTER TABLE "Affiliation" ADD CONSTRAINT "Affiliation_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlergicCondition" ADD CONSTRAINT "AlergicCondition_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
