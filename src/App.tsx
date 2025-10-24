import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ElGrupo from "./pages/ElGrupo";
import Sinergia from "./pages/Sinergia";
import Contacto from "./pages/Contacto";
import Commerce from "./pages/divisions/Commerce";
import Logistics from "./pages/divisions/Logistics";
import Advisory from "./pages/divisions/Advisory";
import Investments from "./pages/divisions/Investments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/el-grupo" element={<ElGrupo />} />
          <Route path="/sinergia" element={<Sinergia />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/divisiones/commerce" element={<Commerce />} />
          <Route path="/divisiones/logistics" element={<Logistics />} />
          <Route path="/divisiones/advisory" element={<Advisory />} />
          <Route path="/divisiones/investments" element={<Investments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
