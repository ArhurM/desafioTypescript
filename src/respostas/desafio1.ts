const funcionario = {
    codigo: 10,
    nome: 'João'
};

// modelo 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// modelo 3
interface Funcionario { 
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';