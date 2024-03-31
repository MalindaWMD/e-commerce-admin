import { Children, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let pageHeaderChild = null;
  let otherChildren = [];

  Children.forEach(children, (child, index) => {
    if(child.type.name === 'PageHeader' || child.props?.as === 'page-header'){
      pageHeaderChild = child;
    }else{
      otherChildren.push(child) 
    }
  })

  return (
    <>
      <div className="min-h-full">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <div className="flex flex-1 flex-col lg:pl-64">
          <Topbar setSidebarOpen={setSidebarOpen} />

          {pageHeaderChild}

          <main className="flex-1 pb-8">
            <div className="mt-8 mx-auto max-w-6xl">
            {otherChildren}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
