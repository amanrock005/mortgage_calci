import plusJakartaSans from "./fonts/morgage_font";
import "./globals.css";

export const metadata = {
  title: "Morgage Calci",
  description: "Calculate your morgage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans}>{children}</body>
    </html>
  );
}
