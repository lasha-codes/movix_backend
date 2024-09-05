-- AlterTable
ALTER TABLE "Movies" ALTER COLUMN "actors" SET DATA TYPE TEXT[];

-- CreateTable
CREATE TABLE "Series" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "imdb" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "year" INTEGER NOT NULL,
    "country" TEXT[],
    "genres" TEXT[],
    "actors" JSONB[],
    "duration" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "rating" TEXT NOT NULL DEFAULT 'NR',
    "releaseDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "series" JSONB[],

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);
