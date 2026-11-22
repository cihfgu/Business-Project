import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Header, WhatsAppFloat } from '@/components/Layout';
import { HomePage } from '@/pages/Home';
import { ProductsPage } from '@/pages/Products';
import { AboutPage } from '@/pages/About';
import { ContactPage } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <WhatsAppFloat />
    </BrowserRouter>
  );
}
