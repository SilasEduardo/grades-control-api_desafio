/**
 * id -> single and automatically generate: string
 * student -> string
 * subject -> subject name Example: "Math": string
 * type -> activity name: Example: "end exam": string
 * value -> note value: 10 : number
 * timestamp -> hours: Date 
 * grandes - []: array
 * ======================CRIAR GRADE===============================
 * 1. Crie um endpoint para criar uma grade. Este endpoint deverá receber como parâmetros
os campos student, subject, type e value conforme descritos acima. Esta grade deverá ser
salva no arquivo json grades.json, e deverá ter um id único associado. No campo
timestamp deverá ser salvo a data e hora do momento da inserção. O endpoint deverá
retornar o objeto da grade que foi criada. A API deverá garantir o incremento automático
deste identificador, de forma que ele não se repita entre os registros. Dentro do arquivo
grades.json que foi fornecido para utilização no desafio o campo nextId já está com um
valor definido. Após a inserção é preciso que esse nextId seja incrementado e salvo no
próprio arquivo, de forma que na próxima inserção ele possa ser utilizado 
 * 
 */