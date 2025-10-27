-- Create enum types for product inquiries
CREATE TYPE public.inquiry_type AS ENUM ('availability', 'quotation', 'general');
CREATE TYPE public.inquiry_urgency AS ENUM ('high', 'medium', 'low');

-- Create product_inquiries table
CREATE TABLE public.product_inquiries (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    company_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    inquiry_type public.inquiry_type NOT NULL,
    product_category TEXT NOT NULL,
    product_description TEXT NOT NULL,
    quantity TEXT,
    urgency public.inquiry_urgency NOT NULL,
    additional_notes TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    admin_notes TEXT,
    CONSTRAINT product_inquiries_company_name_length CHECK (char_length(company_name) >= 2 AND char_length(company_name) <= 150),
    CONSTRAINT product_inquiries_email_length CHECK (char_length(email) >= 3 AND char_length(email) <= 255),
    CONSTRAINT product_inquiries_phone_length CHECK (phone IS NULL OR char_length(phone) <= 20),
    CONSTRAINT product_inquiries_product_category_length CHECK (char_length(product_category) >= 2 AND char_length(product_category) <= 100),
    CONSTRAINT product_inquiries_product_description_length CHECK (char_length(product_description) >= 20 AND char_length(product_description) <= 2000),
    CONSTRAINT product_inquiries_quantity_length CHECK (quantity IS NULL OR char_length(quantity) <= 50),
    CONSTRAINT product_inquiries_additional_notes_length CHECK (additional_notes IS NULL OR char_length(additional_notes) <= 1000)
);

-- Create indexes for better query performance
CREATE INDEX idx_product_inquiries_created_at ON public.product_inquiries(created_at DESC);
CREATE INDEX idx_product_inquiries_status ON public.product_inquiries(status);
CREATE INDEX idx_product_inquiries_email ON public.product_inquiries(email);
CREATE INDEX idx_product_inquiries_urgency ON public.product_inquiries(urgency);
CREATE INDEX idx_product_inquiries_inquiry_type ON public.product_inquiries(inquiry_type);

-- Enable Row Level Security
ALTER TABLE public.product_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit product inquiry (public insert)
CREATE POLICY "Anyone can submit product inquiry"
ON public.product_inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy: Authenticated users can view inquiries (for future admin panel)
CREATE POLICY "Authenticated users can view product inquiries"
ON public.product_inquiries
FOR SELECT
TO authenticated
USING (true);

-- Policy: Authenticated users can update inquiries (for future admin panel)
CREATE POLICY "Authenticated users can update product inquiries"
ON public.product_inquiries
FOR UPDATE
TO authenticated
USING (true);

-- Policy: Authenticated users can delete inquiries (for future admin panel)
CREATE POLICY "Authenticated users can delete product inquiries"
ON public.product_inquiries
FOR DELETE
TO authenticated
USING (true);