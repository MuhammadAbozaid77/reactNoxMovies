import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";


export default function AppLayout() {
  return (
    <div className="flex justify-between flex-col" >
      <Header />
      <main className="bg-[#02070c]/80 min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
