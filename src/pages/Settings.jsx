import { Link, useSearchParams } from "react-router-dom";
import { BellIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils/css";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import StoreDetails from "../components/settings/StoreDetails";
import StoreNotifications from "../components/settings/StoreNotifications";

const subNavigation = [
  {
    id: 'general',
    name: "Store details",
    href: "/settings?type=general",
    icon: Cog8ToothIcon,
    current: true,
    component: <StoreDetails/>,
  },
  { 
    id: 'notifications',
    name: "Notifications", 
    href: "/settings?type=notifications", 
    icon: BellIcon, 
    current: false,
    component: <StoreNotifications/>,
  },
];

const renderContent = (type) => {
  let nav = subNavigation.filter(nav => nav.id === type)[0];

  if(nav){
    return nav.component;
  }

  return StoreDetails;
}

const Header = () => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Settings
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0"></div>
    </PageHeader>
  );
};

export default function Settings() {
  
  const [searchParams, setSearchParams] = useSearchParams();

  let type = searchParams.get('type') || 'general';

  return (
    <Layout>
      <Header as="page-header" />

      <div className="overflow-hidden rounded-sm bg-white shadow">
        <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          <aside className="py-6 lg:col-span-3">
            <nav className="space-y-1">
              {subNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    (item.id === type)
                      ? "border-gray-500 bg-gray-100 text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                      : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center border-l-4 px-3 py-2 text-sm font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className={classNames(
                      (item.id === type)
                        ? "text-gray-500 group-hover:text-gray-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "-ml-1 mr-3 h-6 w-6 flex-shrink-0",
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}
            </nav>
          </aside>
          
          { renderContent(type) }
          
        </div>
      </div>
    </Layout>
  );
}
