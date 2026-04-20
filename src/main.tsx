import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import { AdminDataProvider } from "@/lib/admin-store";
import { LanguageProvider } from "@/lib/i18n";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <AdminDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AdminDataProvider>
    </LanguageProvider>
  </React.StrictMode>
);
