"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpf = void 0;
const Pessoa_1 = require("./Pessoa");
class Cpf extends Pessoa_1.Pessoa {
    // método construtor
    constructor(_nome, _cpf) {
        super(_nome);
        this.cpf = _cpf;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getCpf() {
        return this.cpf;
    }
    documentoidentificador() {
        return this.cpf;
    }
}
exports.Cpf = Cpf;
//# sourceMappingURL=PessoaFisica.js.map