import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
  style: "normal", // Optional, for styles like italic
  variable: "--font-plus-jakarta-sans", // For CSS variable usage
});

export default plusJakartaSans;
