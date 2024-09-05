/*
  Warnings:

  - The `actors` column on the `Movies` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "actors",
ADD COLUMN     "actors" JSONB[];
