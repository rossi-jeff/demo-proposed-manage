-- CreateTable
CREATE TABLE "SupportDocument" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "documentText" TEXT,
    "sectionHeader" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportDocument_pkey" PRIMARY KEY ("id")
);
