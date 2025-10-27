import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { productInquirySchema, type ProductInquiryFormData } from "@/schemas/productInquirySchema";
import { Loader2 } from "lucide-react";

const ProductInquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInquiryFormData>({
    resolver: zodResolver(productInquirySchema),
    defaultValues: {
      inquiry_type: "general",
      urgency: "medium",
    },
  });

  const onSubmit = async (data: ProductInquiryFormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("product_inquiries").insert([
        {
          company_name: data.company_name,
          email: data.email,
          phone: data.phone || null,
          inquiry_type: data.inquiry_type,
          product_category: data.product_category,
          product_description: data.product_description,
          quantity: data.quantity || null,
          urgency: data.urgency,
          additional_notes: data.additional_notes || null,
        },
      ]);

      if (error) {
        throw error;
      }

      toast({
        title: "¡Consulta enviada con éxito!",
        description: "Le responderemos en 24-48 horas.",
      });

      reset();
    } catch (error) {
      console.error("Error submitting product inquiry:", error);
      toast({
        title: "Error al enviar consulta",
        description: "Por favor, intente nuevamente más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-background p-8 rounded-lg border-2 border-border">
      {/* Company Name */}
      <div className="space-y-2">
        <Label htmlFor="company_name">Nombre de Empresa/Persona *</Label>
        <Input
          id="company_name"
          {...register("company_name")}
          placeholder="Ej: Empresa ABC S.A. o Juan Pérez"
          className={errors.company_name ? "border-destructive" : ""}
        />
        {errors.company_name && (
          <p className="text-sm text-destructive">{errors.company_name.message}</p>
        )}
      </div>

      {/* Email and Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="correo@ejemplo.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono (opcional)</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+591 70000000"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Inquiry Type */}
      <div className="space-y-2">
        <Label htmlFor="inquiry_type">Tipo de Consulta *</Label>
        <select
          id="inquiry_type"
          {...register("inquiry_type")}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="general">Consulta General</option>
          <option value="availability">Consulta de Disponibilidad</option>
          <option value="quotation">Solicitud de Cotización</option>
        </select>
        {errors.inquiry_type && (
          <p className="text-sm text-destructive">{errors.inquiry_type.message}</p>
        )}
      </div>

      {/* Product Category */}
      <div className="space-y-2">
        <Label htmlFor="product_category">Categoría de Producto *</Label>
        <Input
          id="product_category"
          {...register("product_category")}
          placeholder="Ej: Equipos médicos, Maquinaria industrial, Electrónica, etc."
          className={errors.product_category ? "border-destructive" : ""}
        />
        {errors.product_category && (
          <p className="text-sm text-destructive">{errors.product_category.message}</p>
        )}
      </div>

      {/* Product Description */}
      <div className="space-y-2">
        <Label htmlFor="product_description">Descripción Detallada del Producto *</Label>
        <Textarea
          id="product_description"
          {...register("product_description")}
          placeholder="Describa el producto que necesita: marca, modelo, especificaciones técnicas, uso previsto, etc."
          className={`min-h-[120px] ${errors.product_description ? "border-destructive" : ""}`}
        />
        {errors.product_description && (
          <p className="text-sm text-destructive">{errors.product_description.message}</p>
        )}
      </div>

      {/* Quantity and Urgency */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="quantity">Cantidad Aproximada (opcional)</Label>
          <Input
            id="quantity"
            {...register("quantity")}
            placeholder="Ej: 100 unidades, 5 containers"
            className={errors.quantity ? "border-destructive" : ""}
          />
          {errors.quantity && (
            <p className="text-sm text-destructive">{errors.quantity.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="urgency">Urgencia *</Label>
          <select
            id="urgency"
            {...register("urgency")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="low">Flexible (más de 1 mes)</option>
            <option value="medium">Normal (1-4 semanas)</option>
            <option value="high">Urgente (menos de 1 semana)</option>
          </select>
          {errors.urgency && (
            <p className="text-sm text-destructive">{errors.urgency.message}</p>
          )}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="additional_notes">Notas Adicionales (opcional)</Label>
        <Textarea
          id="additional_notes"
          {...register("additional_notes")}
          placeholder="Cualquier información adicional que considere relevante..."
          className={`min-h-[80px] ${errors.additional_notes ? "border-destructive" : ""}`}
        />
        {errors.additional_notes && (
          <p className="text-sm text-destructive">{errors.additional_notes.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-accent text-primary-foreground"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Consulta"
        )}
      </Button>
    </form>
  );
};

export default ProductInquiryForm;
