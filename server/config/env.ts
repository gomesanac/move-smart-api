import dotenv from 'dotenv';

dotenv.config();

interface Config {
  GOOGLE_API_KEY: string;
  PORT: number;
}

const config: Config = {
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || '',
  PORT: Number(process.env.PORT) || 3001,
};

export default config;
