import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  API_ENDPOINT: 'http://localhost:5002/api',
  ENV: 'PROD',
  VERSION: '1.0.0'
};

export = ProdConfig;

