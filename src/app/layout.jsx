import Footer from "shared-components/Footer";
import Header from "shared-components/Header";
import vazirFont from "@/constants/localFont";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { MainProvider } from "./(routes)/(home)/_context/main-context";

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
      <body
        className={`${vazirFont.variable} font-sans min-h-screen flex flex-col`}
      >
        <Toaster />
        <DarkModeProvider>
          <ReactQueryProvider>
            <MainProvider>
              <Header />
              <main className="container max-w-screen-xl mx-auto">
                {children}
              </main>
              <Footer />
            </MainProvider>
          </ReactQueryProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
// export default appWithTranslation(RootLayout, config);
