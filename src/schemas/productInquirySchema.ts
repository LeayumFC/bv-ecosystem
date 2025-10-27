import { z } from "zod";

export const productInquirySchema = z.object({
  company_name: z
    .string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(150, { message: "El nombre debe tener máximo 150 caracteres" }),
  
  email: z
    .string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "El email debe tener máximo 255 caracteres" }),
  
  phone: z
    .string()
    .trim()
    .max(20, { message: "El teléfono debe tener máximo 20 caracteres" })
    .optional()
    .or(z.literal("")),
  
  inquiry_type: z.enum(["availability", "quotation", "general"], {
    required_error: "Debe seleccionar un tipo de consulta",
  }),
  
  product_category: z
    .string()
    .trim()
    .min(2, { message: "La categoría debe tener al menos 2 caracteres" })
    .max(100, { message: "La categoría debe tener máximo 100 caracteres" }),
  
  product_description: z
    .string()
    .trim()
    .min(20, { message: "La descripción debe tener al menos 20 caracteres" })
    .max(2000, { message: "La descripción debe tener máximo 2000 caracteres" }),
  
  quantity: z
    .string()
    .trim()
    .max(50, { message: "La cantidad debe tener máximo 50 caracteres" })
    .optional()
    .or(z.literal("")),
  
  urgency: z.enum(["high", "medium", "low"], {
    required_error: "Debe seleccionar el nivel de urgencia",
  }),
  
  additional_notes: z
    .string()
    .trim()
    .max(1000, { message: "Las notas deben tener máximo 1000 caracteres" })
    .optional()
    .or(z.literal("")),
});

export type ProductInquiryFormData = z.infer<typeof productInquirySchema>;
