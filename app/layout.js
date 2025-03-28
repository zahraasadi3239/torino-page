import "./globals.css";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "sonner";

import Layout from "@/components/layout/Layout";
import { yekan } from "@/core/utils/font";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <TanstackQueryProvider>
          <Toaster richColors position="top-right" />
          <Layout> {children}</Layout>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
