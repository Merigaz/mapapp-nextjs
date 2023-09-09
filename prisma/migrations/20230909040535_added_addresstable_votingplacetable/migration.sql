-- CreateTable
CREATE TABLE "VotingPlace" (
    "idvotingplace" TEXT NOT NULL,
    "votingplace" TEXT NOT NULL,
    "addressvotingplace" TEXT NOT NULL,

    CONSTRAINT "VotingPlace_pkey" PRIMARY KEY ("idvotingplace")
);

-- CreateTable
CREATE TABLE "Address" (
    "idname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "table" TEXT NOT NULL,
    "idvotingplace" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("idname")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_id_key" ON "Address"("id");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_idvotingplace_fkey" FOREIGN KEY ("idvotingplace") REFERENCES "VotingPlace"("idvotingplace") ON DELETE RESTRICT ON UPDATE CASCADE;
