import {
  CatalogProvider,
  getCategoryList,
} from "@/shared/context/catalog-data";
import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categoryList = await getCategoryList();

  return (
    <>
      <CatalogProvider categoryData={categoryList}>
        <NuqsAdapter>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          {children}
        </NuqsAdapter>
        <Footer />
      </CatalogProvider>
    </>
  );
}
