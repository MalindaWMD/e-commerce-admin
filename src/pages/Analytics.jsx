import StatsBar from "../components/analytics/StatsBar";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import BasicTable from "../components/common/BasicTable";

const stats = [
  {
    name: "Total sales",
    stat: "12200.00",
    previousStat: "10500.00",
    change: "12%",
    changeType: "increase",
    type: "currency",
  },
  {
    name: "Avg. order value",
    stat: "60",
    previousStat: "55",
    change: "2.02%",
    changeType: "increase",
    type: "currency",
  },
  {
    name: "Total orders",
    stat: "197",
    previousStat: "200",
    change: "4.05%",
    changeType: "decrease",
  },
];

const trendingProducts = {
  footer: {
    label: "Showing up to 5 resulsts",
    action: {
      label: "View all",
      href: "/products",
    },
  },
  headers: ['Product', 'Orders'],
  rows: [
    {
      product: 'Antischimel chemie',
      orders: 2
    },
    {
      product: 'Dust pans small',
      orders: 3
    },
    {
      product: 'Dust brush small Heizkoperburste U form',
      orders: 2
    },
    {
      product: 'Hand brushe',
      orders: 2
    },
  ]
}

const TotalSalesChart = () => {
  const totalSales = {
    current_week: [1220, 1464, 1220, 2196, 2684, 1830, 1586],
    last_week: [1050, 1260, 1050, 1890, 2310, 1575, 1365],
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "This week",
        data: totalSales.current_week.slice(0, new Date().getDate() || 7),
      },
      {
        label: "Last week",
        data: totalSales.last_week,
      },
    ],
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <p className="mb-4 text-base font-normal text-gray-900">Total sales</p>
      <LineChart data={data} yPrefix="$" abbreviate={true} steps={500}/>
    </div>
  );
};

const ConversionRateChart = () => {
  const conversionRates = {
    current_week: [2.2, 2.8, 2.0, 3.5, 3.8, 2.5, 2.0],
    last_week: [2.0, 2.5, 1.8, 3.2, 3.0, 2.3, 1.9],
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "This week",
        data: conversionRates.current_week.slice(0, new Date().getDate() || 7),
      },
      {
        label: "Last week",
        data: conversionRates.last_week,
      },
    ],
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <p className="mb-4 text-base font-normal text-gray-900">Conversion rate</p>
      <LineChart data={data} ySufix="%"/>
    </div>
  );
};

const WebsiteTrafficChart = () => {
  const traffic = {
    current_week: [520,610,480,750,820,430,390],
    last_week: [480,550,430,700,680,400,350],
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "This week",
        data: traffic.current_week.slice(0, new Date().getDate() || 7),
      },
      {
        label: "Last week",
        data: traffic.last_week,
      },
    ],
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <p className="mb-4 text-base font-normal text-gray-900">Website traffic(Sessions)</p>
      <LineChart data={data} steps={100}/>
    </div>
  );
};

const TrafficSourcesChart = () => {
  const data = {
    labels: ['Organic Search', 'Social Media', 'Paid Ads', 'Email Marketing', 'Direct Traffic'],
    datasets: [
      {
        label: 'sessions',
        data: [45,25,15,10,5],
      },
    ],
  };
  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <p className="mb-4 text-base font-normal text-gray-900">Traffic sources(Sessions)</p>
      <BarChart data={data}/>
    </div>
  );

}

const Header = () => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Analytics
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0"></div>
    </PageHeader>
  );
};

export default function Analytics() {
  return (
    <Layout>
      <Header as="page-header" />
      <StatsBar stats={stats} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TotalSalesChart />
        <ConversionRateChart />
        <WebsiteTrafficChart />
        <TrafficSourcesChart />
        <BasicTable data={trendingProducts} />
      </div>
    </Layout>
  );
}
