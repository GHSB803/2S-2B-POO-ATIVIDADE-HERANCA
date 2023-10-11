"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cnpj = void 0;
const Pessoa_1 = require("./Pessoa");
class Cnpj extends Pessoa_1.Pessoa {
    // método construtor
    constructor(_nome, _cnpj) {
        super(_nome);
        this.cnpj = _cnpj;
    }
    setCnpj(_cnpj) {
        this.cnpj = _cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    documentoidentificador() {
        return this.cnpj;
    }
}
exports.Cnpj = Cnpj;
//# sourceMappingURL=PessoaJuridica.js.map