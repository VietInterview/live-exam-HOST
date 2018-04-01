import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  API_ENDPOINT: 'http://localhost:5002/api',
  ENV: 'DEV',
  VERSION: '1.0.0'
};

export = DevConfig;

