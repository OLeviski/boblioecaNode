// importando randomUUID
import {randomUUID} from "node:crypto"
export class DatabaseMemory {
#livros = new Map()
// listando livros sem as chaves
list(){
    return Array.from(this.#livros.entries()).map((livroArray) => {
// primeira posição
        const id = livroArray[0]
// segunda posição
        const data = livroArray[1]

        return{
            id,
            ...data, 
        }
    })
}
// criando livro
create(livro){
    // gerando id aleatório com randomUUID
    const livroId = randomUUID()
    this.#livros.set(livroId, livro)
}
// atualizando livro
update(id, livro){
    this.#livros.set(id, livro)
}
// deletando livro
delete(id, livro){
    this.#livros.delete(id, livro)
}
}