// src/utils/validators/schemas/zod/UsuarioSchema.js

import { z } from 'zod';

const GastoSchema = z.object({
  nome: z.string().optional(),
  valorDespesa: z.string().optional(),
});

const GastoSchemaUpdate = GastoSchema.partial();

export { GastoSchema, GastoSchemaUpdate };
