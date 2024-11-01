import { useEffect } from "react";
import Navigations from "./Navigations";
import ReactQueryProvider from "./ReactQueryProvider";
import RouterProvider from "./RouterProvider";
import { useTranslation } from "react-i18next";

export default function AppProvider() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <ReactQueryProvider>
        <RouterProvider>
          <Navigations />
        </RouterProvider>
      </ReactQueryProvider>
    </>
  );
}
