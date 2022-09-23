/*
  Warnings:

  - You are about to drop the column `numnber` on the `Phone` table. All the data in the column will be lost.
  - Made the column `number` on table `Phone` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Phone" DROP COLUMN "numnber",
ALTER COLUMN "number" SET NOT NULL;
