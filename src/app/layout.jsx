// "use client"

import Footer from "shared-components/Footer";
import Header from "shared-components/Header";
import vazirFont from "@/constants/localFont";
// import AuthProvider from "@/context/AuthContext";
import { DarkModeProvider, DarkModeProvier } from "@/context/DarkModeContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
// import { appWithTranslation } from "next-i18next";
// import { config } from "./next-i18next.config";

export const metadata = {
  // title: "بلاگ اپ",
  title: {
    template: "%s | بلااگ اپ",
    default: "بلاگ اپ", // a default is required when creating a template
  },
  description: "وب اپلیکیشن طراحی وبسایت و برنامه های موبایل",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl" className="">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <DarkModeProvider>
          <ReactQueryProvider>
            {/* <AuthProvider> */}
            {/* <ApolloProviderWrapper>{children}</ApolloProviderWrapper> */}
            <Header />

            {children}
            <Footer />
            {/* </AuthProvider> */}
          </ReactQueryProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
// export default appWithTranslation(RootLayout, config);
