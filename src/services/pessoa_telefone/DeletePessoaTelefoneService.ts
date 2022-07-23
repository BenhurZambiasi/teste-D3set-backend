import prismaClient from "../../prisma";
interface IPessoaTelefoneRequest {
  id: string;
}

export class DeletePessoaTelefoneService {
  async execute({ id }: IPessoaTelefoneRequest) {
    const pessoaTelefone = await prismaClient.pessoaTelefone.delete({
      where: { id },
    });

    return pessoaTelefone;
  }
}
