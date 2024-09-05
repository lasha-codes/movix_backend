-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "iconNumber" INTEGER NOT NULL,
    "displayMarkedMovies" BOOLEAN NOT NULL DEFAULT false,
    "displayWatchedMovies" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "imdb" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "year" INTEGER NOT NULL,
    "country" TEXT[],
    "genres" TEXT[],
    "actors" JSONB[],
    "description" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "rating" TEXT NOT NULL DEFAULT 'NR',
    "releaseDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "videos" JSONB[],

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Actors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
