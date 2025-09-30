import { ZodObject } from 'zod';

export type Tool = {
  name: string;
  description: string;
  schema: ZodObject;
  func: (query: string) => Promise<string>;
};
