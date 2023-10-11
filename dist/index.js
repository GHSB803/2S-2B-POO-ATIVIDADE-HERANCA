"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PessoaFisica_1 = require("./model/PessoaFisica");
const PessoaJuridica_1 = require("./model/PessoaJuridica");
const pf = new PessoaFisica_1.Cpf(`Gabriel`, `591.869.290-89`);
const pj = new PessoaJuridica_1.Cnpj(`Patriots`, `21.595.821/0001-98`);
pf.setNome(`Gabriel`);
pf.setCpf(`591.869.290-89`);
console.log(`Nome: ${pf.getNome()}`);
console.log(`Cpf: ${pf.getCpf()}`);
console.log(`Documento Identificador: ${pf.documentoidentificador()}`);
console.log("\n");
pj.setNome(`Patriots`);
pj.setCnpj(`21.595.821/0001-98`);
console.log(`Nome: ${pj.getNome()}`);
console.log(`Taxa de Comissão: ${pj.getCnpj()}`);
console.log(`Documento Identificador: ${pj.documentoidentificador()}`);
//# sourceMappingURL=index.js.map