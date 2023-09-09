/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idname` on the `Address` table. All the data in the column will be lost.
  - The primary key for the `VotingPlace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idvotingplace` on the `VotingPlace` table. All the data in the column will be lost.
  - Added the required column `addressvotingplace` to the `Address` table without a default value. This is not possible if the table is not empty.
  - The required column `idaddress` was added to the `Address` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `votingplace` to the `Address` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `VotingPlace` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_idvotingplace_fkey";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
DROP COLUMN "idname",
ADD COLUMN     "addressvotingplace" TEXT NOT NULL,
ADD COLUMN     "idaddress" TEXT NOT NULL,
ADD COLUMN     "votingplace" TEXT NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("idaddress");

-- AlterTable
ALTER TABLE "VotingPlace" DROP CONSTRAINT "VotingPlace_pkey",
DROP COLUMN "idvotingplace",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "VotingPlace_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_idvotingplace_fkey" FOREIGN KEY ("idvotingplace") REFERENCES "VotingPlace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
