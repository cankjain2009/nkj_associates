import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NK Jain & Associates | Chartered Accountants (PAN India)",
  description: "Professionally managed Chartered Accountancy firm with over 16 years of practice founded by CA Naresh Kumar Jain. Offering Audit, Tax Strategy, US GAAP/IND AS Reporting, IPO Readiness & Advisory services PAN India.",
  keywords: [
    "Chartered Accountant",
    "CA Firm India",
    "US CPA Services",
    "US GAAP",
    "IND AS",
    "Tax Advisory",
    "Statutory Audit",
    "PAN India CA Practice",
    "NK Jain & Associates"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
