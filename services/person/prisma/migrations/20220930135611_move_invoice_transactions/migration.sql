-- CreateTable
CREATE TABLE "InvoiceTransaction" (
    "id" TEXT NOT NULL,
    "remoteId" TEXT,
    "status" TEXT,
    "invoiceId" TEXT,
    "paymentType" TEXT,
    "adminFlag" BOOLEAN DEFAULT true,
    "problemStatusAt" TIMESTAMP(3),
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvoiceTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InvoiceTransaction_invoiceId_key" ON "InvoiceTransaction"("invoiceId");
