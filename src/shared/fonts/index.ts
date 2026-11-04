import { Rubik } from "next/font/google";

export const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: [ "400", "500", "600", "700", "800"],
});
