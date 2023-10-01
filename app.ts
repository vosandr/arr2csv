import fs from 'fs';

const pathToFile ='./info.csv'

const text = [
  "asasdfsdf",
  "fsdfsdf",
  "dfsdf",
];

fs.writeFileSync(pathToFile, text.toString(),{encoding: 'utf8', flag: 'ax'})