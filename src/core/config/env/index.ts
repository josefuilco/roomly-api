import { z } from 'zod';

import 'dotenv/config';

interface Environment {
  type: 'development' | 'production';
  port: number;
}

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
});

const { data, success, error } = EnvSchema.safeParse(process.env);

if (!success) {
  console.error('Invalid environment variables:', error);
  process.exit(1);
}

export const env: Environment = {
  type: data.NODE_ENV,
  port: data.PORT,
};
