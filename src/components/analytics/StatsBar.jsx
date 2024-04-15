import DashboardCard from "../DashboardCard";

export default function StatsBar({ title, stats }) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-4 text-gray-900">
        {title}
      </h3>
      <dl className="mt-4 mb-4 grid grid-cols-3 gap-4">
        {stats.map((item) => {
          return <DashboardCard key={item.name} card={item} />
      })}
      </dl>
    </div>
  );
}
