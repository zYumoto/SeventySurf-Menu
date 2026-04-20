import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AboutPage } from "@/pages/about";
import { AdminPage } from "@/pages/admin";
import { ContactPage } from "@/pages/contact";
import { EventsPage } from "@/pages/events";
import { HomePage } from "@/pages/home";
import { MenuPage } from "@/pages/menu";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
