const nome = ["fernanda","giuliana","Maria Eduarda","Marcelo","Amanda","joao","Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.randona()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
