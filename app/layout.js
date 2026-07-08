import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata = {
  title: "Mohammad Hosein Godarzi | Web Consultant & Designer",
  description:
    "Personal site of Mohammad Hosein Godarzi — web consultant, designer, and front-end developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className="dark">
      <body
        className={`${vazirmatn.variable} font-sans bg-bg-light text-ink-light antialiased dark:bg-bg-dark dark:text-ink-dark`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
