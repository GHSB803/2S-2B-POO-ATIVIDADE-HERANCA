import { Pessoa } from "./Pessoa";

export class Cnpj extends Pessoa {
    private cnpj: string

// método construtor
public constructor(_nome: string, _cnpj: string){
    super(_nome)
    this.cnpj = _cnpj
}

public setCnpj(_cnpj: string):void{
    this.cnpj = _cnpj
}
public getCnpj(){
    return this.cnpj;
}
    public documentoidentificador(): string{
        return this.cnpj
    }
}