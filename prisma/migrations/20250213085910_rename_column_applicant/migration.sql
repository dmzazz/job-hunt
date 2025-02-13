/*
  Warnings:

  - You are about to drop the column `linkedIn` on the `Applicant` table. All the data in the column will be lost.
  - Added the required column `linkedin` to the `Applicant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "linkedIn",
ADD COLUMN     "linkedin" TEXT NOT NULL;
