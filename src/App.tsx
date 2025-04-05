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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../src/assests/zenher-logo.png"; // Adjust the path if needed

const queryClient = new QueryClient();

// Zoom animation Preloader
const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.img
          src={logo}
          alt="Zenher Loading"
          className="w-24 h-24 mb-4"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.p
          className="text-gray-600 text-lg font-medium"
          animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading Zenher...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <BrowserRouter>
              <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
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
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
