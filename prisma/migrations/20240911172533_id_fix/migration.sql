/*
  Warnings:

  - The primary key for the `Genres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Genres` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Genres" DROP CONSTRAINT "Genres_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Genres_pkey" PRIMARY KEY ("id");
