// src/utils/validators/schemas/zod/UsuarioSchema.js

import { z } from 'zod';

const GastoSchema = z.object({
  nome: z.string().min(3).max(45),
  valorDespesa: z.number()
});

const GastoSchemaUpdate = GastoSchema.partial();

export { GastoSchema, GastoSchemaUpdate };
