/*
  Warnings:

  - You are about to drop the `Affiliation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlergicCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmergencyContact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LegalVideoConsent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicalCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessagePerson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonEmail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonPhone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Affiliation" DROP CONSTRAINT "Affiliation_personId_fkey";

-- DropForeignKey
ALTER TABLE "AlergicCondition" DROP CONSTRAINT "AlergicCondition_personId_fkey";

-- DropForeignKey
ALTER TABLE "CustomAnswer" DROP CONSTRAINT "CustomAnswer_personId_fkey";

-- DropForeignKey
ALTER TABLE "EmergencyContact" DROP CONSTRAINT "EmergencyContact_personId_fkey";

-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_invitedById_fkey";

-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_personId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_personId_fkey";

-- DropForeignKey
ALTER TABLE "LegalVideoConsent" DROP CONSTRAINT "LegalVideoConsent_personId_fkey";

-- DropForeignKey
ALTER TABLE "LineItem" DROP CONSTRAINT "LineItem_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "LineItemInvoice" DROP CONSTRAINT "LineItemInvoice_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "MedicalCondition" DROP CONSTRAINT "MedicalCondition_personId_fkey";

-- DropForeignKey
ALTER TABLE "MessagePerson" DROP CONSTRAINT "MessagePerson_messageId_fkey";

-- DropForeignKey
ALTER TABLE "MessagePerson" DROP CONSTRAINT "MessagePerson_personId_fkey";

-- DropForeignKey
ALTER TABLE "PersonAddress" DROP CONSTRAINT "PersonAddress_personId_fkey";

-- DropForeignKey
ALTER TABLE "PersonEmail" DROP CONSTRAINT "PersonEmail_personId_fkey";

-- DropForeignKey
ALTER TABLE "PersonPhone" DROP CONSTRAINT "PersonPhone_personId_fkey";

-- DropTable
DROP TABLE "Affiliation";

-- DropTable
DROP TABLE "AlergicCondition";

-- DropTable
DROP TABLE "CustomAnswer";

-- DropTable
DROP TABLE "EmergencyContact";

-- DropTable
DROP TABLE "Invite";

-- DropTable
DROP TABLE "Invoice";

-- DropTable
DROP TABLE "LegalVideoConsent";

-- DropTable
DROP TABLE "MedicalCondition";

-- DropTable
DROP TABLE "MessagePerson";

-- DropTable
DROP TABLE "PersonAddress";

-- DropTable
DROP TABLE "PersonEmail";

-- DropTable
DROP TABLE "PersonPhone";
