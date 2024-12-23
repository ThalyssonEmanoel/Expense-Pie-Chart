// src/utils/validators/schemas/zod/UsuarioSchema.js

import { z } from 'zod';

const usuarioSchema = z.object({
  nome: z.string().min(3).max(45),
  senha: z.string().optional(),
});

const usuarioSchemaUpdate = usuarioSchema.partial();

export { usuarioSchema, usuarioSchemaUpdate };
