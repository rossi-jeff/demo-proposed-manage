-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonPhone" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,

    CONSTRAINT "PersonPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonEmail" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,

    CONSTRAINT "PersonEmail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PersonPhone" ADD CONSTRAINT "PersonPhone_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonEmail" ADD CONSTRAINT "PersonEmail_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
