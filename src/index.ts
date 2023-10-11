import { Cpf } from "./model/PessoaFisica";
import { Cnpj } from "./model/PessoaJuridica";

const pf = new Cpf (`Gabriel`, `591.869.290-89`);
const pj = new Cnpj (`Patriots`, `21.595.821/0001-98`);

pf.setNome(`Gabriel`);
pf.setCpf(`591.869.290-89`);
console.log(`Nome: ${pf.getNome()}`);
console.log(`Cpf: ${pf.getCpf()}`);
console.log(`Documento Identificador: ${pf.documentoidentificador()}`);

console.log("\n");

pj.setNome(`Patriots`);
pj.setCnpj(`21.595.821/0001-98`);
console.log(`Nome: ${pj.getNome()}`);
console.log(`Cnpj: ${pj.getCnpj()}`);
console.log(`Documento Identificador: ${pj.documentoidentificador()}`);