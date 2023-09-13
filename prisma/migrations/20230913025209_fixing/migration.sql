/*
  Warnings:

  - You are about to drop the column `address` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `addressvotingplace` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `votingplace` on the `Address` table. All the data in the column will be lost.
  - Added the required column `addressname` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "address",
DROP COLUMN "addressvotingplace",
DROP COLUMN "votingplace",
ADD COLUMN     "addressname" TEXT NOT NULL;
