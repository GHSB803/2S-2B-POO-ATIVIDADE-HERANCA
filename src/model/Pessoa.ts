export abstract class Pessoa {
    private nome: string

// método construtor
public constructor(_nome: string)
    {this.nome = _nome}

public setNome(_nome: string):void{
    this.nome = _nome
}
public getNome(){
    return this.nome;
}
    public abstract documentoidentificador(): string;
}