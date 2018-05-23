import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  API_ENDPOINT: 'http://192.168.0.250:5002/api',
  ENV: 'PROD',
  VERSION: '1.0.0'
};

export = ProdConfig;

