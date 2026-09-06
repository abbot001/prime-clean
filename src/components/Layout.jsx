import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileQuickBook from './MobileQuickBook';

export default function Layout() {
  return (
    <div className="linen-grain min-h-screen flex flex-col bg-background">
      {/* Status-Sync Header — thin pulsing cyan line: "Live & Ready" */}
      <div className="fixed top-0 inset-x-0 z-[60] h-[3px] overflow-hidden">
        <div className="h-full w-full bg-accent animate-pulse-cyan" />
      </div>

      <Navbar />
      <main className="flex-1 pt-[3px]">
        <Outlet />
      </main>
      <Footer />
      <MobileQuickBook />
    </div>
  );
}