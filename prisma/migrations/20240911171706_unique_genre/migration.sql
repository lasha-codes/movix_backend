/*
  Warnings:

  - A unique constraint covering the columns `[genre]` on the table `Genres` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Genres_genre_key" ON "Genres"("genre");
