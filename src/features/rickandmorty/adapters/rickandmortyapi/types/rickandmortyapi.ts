import { z } from 'zod';

export const characterFilterSchema = z.object({
  page: z.number().optional(),
  name: z.string().optional(),
  species: z.string().optional(),
  type: z.string().optional(),
  status: z.enum(['alive', 'dead', 'unknown']).optional().default('unknown'),
  gender: z
    .enum(['female', 'male', 'genderless', 'unknown'])
    .optional()
    .default('unknown'),
});
export type CharacterFilter = z.infer<typeof characterFilterSchema>;

const LocationSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

export const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.enum(['alive', 'dead', 'unknown']),
  species: z.string(),
  type: z.string(),
  gender: z.enum(['female', 'male', 'genderless', 'unknown']),
  origin: LocationSchema,
  location: LocationSchema,
  image: z.string().url(),
  episode: z.array(z.string().url()),
  url: z.string().url(),
  created: z.string().datetime(),
});

export type Character = z.infer<typeof characterSchema>;
