import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Reservation from "./pages/Reservation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/museum" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/about" element={<Index />} />
          <Route path="/contact" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;