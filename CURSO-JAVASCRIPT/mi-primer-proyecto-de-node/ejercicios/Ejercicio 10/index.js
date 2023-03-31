import { suma, multiplicacion } from './controller.js'
import chalk from 'chalk';

console.log(chalk.green(multiplicacion(suma(1, 2), suma(4, 5))))