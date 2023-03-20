import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff.js')
  .description('CLI to some JavaScript string utilities')
  .version('0.0.1');

  program.parse();