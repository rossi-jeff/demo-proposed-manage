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
CREATE TABLE "CustomAnswer" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "questionId" TEXT,
    "answer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomAnswer_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "EmergencyContact" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT,
    "relationship" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "LegalVideoConsent" (
    "id" TEXT NOT NULL,
    "legalVideoId" TEXT,
    "personId" TEXT,
    "season" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalVideoConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalCondition" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "name" TEXT,
    "physician" TEXT,
    "dateOfDiagnosis" DATE,
    "emergencyPlan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalCondition_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "PersonAddress" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonEmail" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonPhone" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonRole" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonRole_pkey" PRIMARY KEY ("id")
);
