import { HashRouter } from "react-router-dom";

export default function RouterProvider({ children }) {
  return (
    <>
      <HashRouter>{children}</HashRouter>
    </>
  );
}
