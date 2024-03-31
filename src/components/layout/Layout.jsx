import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <div className="flex flex-1 flex-col lg:pl-64">
          <Topbar setSidebarOpen={setSidebarOpen} />

          <main className="flex-1 pb-8">
            <div className="mt-8 mx-auto max-w-6xl px-4 sm:px-6 lg:px-4">
            {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
