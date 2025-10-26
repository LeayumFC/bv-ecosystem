import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre no puede exceder 100 caracteres" }),
  
  email: z.string()
    .trim()
    .email({ message: "Correo electrónico inválido" })
    .max(255, { message: "El correo no puede exceder 255 caracteres" }),
  
  phone: z.string()
    .trim()
    .max(20, { message: "El teléfono no puede exceder 20 caracteres" })
    .optional()
    .or(z.literal("")),
  
  subject: z.enum(['commerce', 'logistics', 'advisory', 'investments', 'other'], {
    errorMap: () => ({ message: "Por favor seleccione un tema válido" })
  }),
  
  message: z.string()
    .trim()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(2000, { message: "El mensaje no puede exceder 2000 caracteres" })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
