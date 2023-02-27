-- CreateTable
CREATE TABLE "Destinations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "distance" TEXT NOT NULL,
    "travel" TEXT NOT NULL,

    CONSTRAINT "Destinations_pkey" PRIMARY KEY ("id")
);
