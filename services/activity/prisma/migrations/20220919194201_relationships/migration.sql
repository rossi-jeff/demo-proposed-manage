/*
  Warnings:

  - You are about to drop the `Settlement` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `campTShirtOrderId` on table `CampShortOrder` required. This step will fail if there are existing NULL values in that column.
  - Made the column `personId` on table `CustomAnswer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `personId` on table `EmergencyContact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CampShortOrder" ALTER COLUMN "campTShirtOrderId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Consent" ALTER COLUMN "legalFormId" SET DATA TYPE TEXT,
ALTER COLUMN "registrationId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "CustomAnswer" ALTER COLUMN "personId" SET NOT NULL,
ALTER COLUMN "personId" SET DATA TYPE TEXT,
ALTER COLUMN "questionId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "EmergencyContact" ALTER COLUMN "personId" SET NOT NULL,
ALTER COLUMN "personId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "GroupRegistration" ALTER COLUMN "registrationId" SET DATA TYPE TEXT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ALTER COLUMN "rosterId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "LegalVideoConsent" ALTER COLUMN "legalVideoId" SET DATA TYPE TEXT,
ALTER COLUMN "personId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MedicalCondition" ALTER COLUMN "personId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "schoolId" SET DATA TYPE TEXT,
ALTER COLUMN "activityId" SET DATA TYPE TEXT,
ALTER COLUMN "ventureId" SET DATA TYPE TEXT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ALTER COLUMN "senderId" SET DATA TYPE TEXT,
ALTER COLUMN "eventId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "acceptsCOPPA" BOOLEAN,
ADD COLUMN     "adData" TEXT,
ADD COLUMN     "allowedToLogin" BOOLEAN DEFAULT false,
ADD COLUMN     "birthDate" DATE,
ADD COLUMN     "concussionTestDate" DATE,
ADD COLUMN     "credit" INTEGER,
ADD COLUMN     "ethnicity" TEXT,
ADD COLUMN     "felonyInfo" INTEGER DEFAULT 0,
ADD COLUMN     "firstEnrollmentDate" DATE,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "gpa" DOUBLE PRECISION,
ADD COLUMN     "highSchoolGraduationYear" TEXT,
ADD COLUMN     "insuranceAccountNumber" TEXT,
ADD COLUMN     "insuranceCompany" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "medicalInformation" TEXT,
ADD COLUMN     "notifications" INTEGER DEFAULT 31,
ADD COLUMN     "optsInToCommunications" BOOLEAN DEFAULT true,
ADD COLUMN     "participationStatus" TEXT,
ADD COLUMN     "physicalDate" DATE,
ADD COLUMN     "physicianName" TEXT,
ADD COLUMN     "physicianPhone" TEXT,
ADD COLUMN     "schoolId" TEXT,
ADD COLUMN     "schoolTransferredFrom" TEXT,
ADD COLUMN     "sex" TEXT,
ADD COLUMN     "studentId" TEXT;

-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "groupId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "RecordAssignment" ALTER COLUMN "recipientId" SET DATA TYPE TEXT,
ALTER COLUMN "rosterId" SET DATA TYPE TEXT,
ALTER COLUMN "recordId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Settlement";

-- AddForeignKey
ALTER TABLE "AwardAssignment" ADD CONSTRAINT "AwardAssignment_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "GroupRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampShortOrder" ADD CONSTRAINT "CampShortOrder_campTShirtOrderId_fkey" FOREIGN KEY ("campTShirtOrderId") REFERENCES "CampTshirtOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampTshirtOrder" ADD CONSTRAINT "CampTshirtOrder_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomAnswer" ADD CONSTRAINT "CustomAnswer_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyContact" ADD CONSTRAINT "EmergencyContact_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelMyClubRegistration" ADD CONSTRAINT "FuelMyClubRegistration_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupAwardAssignment" ADD CONSTRAINT "GroupAwardAssignment_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "GroupRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupRegistration" ADD CONSTRAINT "GroupRegistration_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalVideoConsent" ADD CONSTRAINT "LegalVideoConsent_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItem" ADD CONSTRAINT "LineItem_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItem" ADD CONSTRAINT "LineItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItem" ADD CONSTRAINT "LineItem_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemInvoice" ADD CONSTRAINT "LineItemInvoice_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "LineItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemInvoice" ADD CONSTRAINT "LineItemInvoice_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalCondition" ADD CONSTRAINT "MedicalCondition_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessagePerson" ADD CONSTRAINT "MessagePerson_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessagePerson" ADD CONSTRAINT "MessagePerson_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAssignment" ADD CONSTRAINT "RecordAssignment_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "GroupRegistration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAssignment" ADD CONSTRAINT "RecordAssignment_rosterId_fkey" FOREIGN KEY ("rosterId") REFERENCES "Roster"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAssignment" ADD CONSTRAINT "RecordAssignment_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubLineItem" ADD CONSTRAINT "SubLineItem_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "LineItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketRegistration" ADD CONSTRAINT "TicketRegistration_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketRegistration" ADD CONSTRAINT "TicketRegistration_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketRegistration" ADD CONSTRAINT "TicketRegistration_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketRegistration" ADD CONSTRAINT "TicketRegistration_lineItemId_fkey" FOREIGN KEY ("lineItemId") REFERENCES "LineItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
