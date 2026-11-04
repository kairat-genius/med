import type { Metadata } from "next";
import "@/shared/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { rubikFont } from "@/shared/fonts";
import { ClientErrorProvider } from "./ClientErrorProvider";
import { ToastProvider } from "@/shared/toast";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body
        className={`${rubikFont.variable} min-h-full flex flex-col antialiased pt-6`}
      >
        <NextTopLoader
          color="#ff3a5c"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease-in-out"
          speed={200}
          shadow="0 0 10px #ff3a5c,0 0 5px #ff3a5c"
        />

        <ClientErrorProvider>
          <ToastProvider>{children}</ToastProvider>
        </ClientErrorProvider>
      </body>
    </html>
  );
}
