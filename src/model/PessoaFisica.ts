import { Pessoa } from "./Pessoa";

export class Cpf extends Pessoa {
    private cpf: string

// método construtor
public constructor(_nome: string, _cpf: string){
    super(_nome)
    this.cpf = _cpf
}

public setCpf(_cpf: string):void{
    this.cpf = _cpf
}
public getCpf(){
    return this.cpf;
}
    public documentoidentificador(): string{
        return this.cpf
    }
}