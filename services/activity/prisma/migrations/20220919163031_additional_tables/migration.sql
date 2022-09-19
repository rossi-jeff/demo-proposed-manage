-- CreateTable
CREATE TABLE "PersonAddress" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "PersonAddress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PersonAddress" ADD CONSTRAINT "PersonAddress_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
