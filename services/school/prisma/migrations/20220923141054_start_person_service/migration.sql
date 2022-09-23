/*
  Warnings:

  - You are about to drop the `CoachCertification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DirectingRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DirectingRole" DROP CONSTRAINT "DirectingRole_eventId_fkey";

-- DropTable
DROP TABLE "CoachCertification";

-- DropTable
DROP TABLE "DirectingRole";

-- DropTable
DROP TABLE "PersonRole";
