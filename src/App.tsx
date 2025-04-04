import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tracker from "./pages/Tracker";
import Marketplace from "./pages/Marketplace";
import Consultations from "./pages/Consultations";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;