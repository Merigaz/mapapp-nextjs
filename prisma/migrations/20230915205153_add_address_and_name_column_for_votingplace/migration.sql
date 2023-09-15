/*
  Warnings:

  - Added the required column `addressvotingplace` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `votingplace` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "addressvotingplace" TEXT NOT NULL,
ADD COLUMN     "votingplace" TEXT NOT NULL;
