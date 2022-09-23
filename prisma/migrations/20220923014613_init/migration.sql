/*
  Warnings:

  - Added the required column `Body` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_uuid` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "Body" JSONB NOT NULL,
ADD COLUMN     "Title" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_uuid" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
