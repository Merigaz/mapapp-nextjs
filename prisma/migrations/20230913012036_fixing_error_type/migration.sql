/*
  Warnings:

  - Changed the type of `id` on the `Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `table` on the `Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "table",
ADD COLUMN     "table" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Address_id_key" ON "Address"("id");
