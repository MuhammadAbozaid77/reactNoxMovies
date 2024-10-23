import Navigations from "./Navigations";
import ReactQueryProvider from "./ReactQueryProvider";
import RouterProvider from "./RouterProvider";

export default function AppProvider() {
  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <ReactQueryProvider>
        <RouterProvider>
          <Navigations />
        </RouterProvider>
      </ReactQueryProvider>
    </>
  );
}
