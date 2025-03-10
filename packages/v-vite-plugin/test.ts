import { execSync } from 'node:child_process';
import { getRuntimeInfo } from './src/utils.ts';

const runtime = getRuntimeInfo();

const version = execSync(`${runtime.name} --version`);

console.log(version.toString());
