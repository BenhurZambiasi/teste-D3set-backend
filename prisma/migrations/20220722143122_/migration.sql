-- CreateTable
CREATE TABLE "pessoa" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pessoa_telefone" (
    "id" TEXT NOT NULL,
    "numero_telefone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "pessoa_id" TEXT NOT NULL,

    CONSTRAINT "pessoa_telefone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_telefone_numero_telefone_key" ON "pessoa_telefone"("numero_telefone");

-- AddForeignKey
ALTER TABLE "pessoa_telefone" ADD CONSTRAINT "pessoa_telefone_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
