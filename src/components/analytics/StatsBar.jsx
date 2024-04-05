import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utils/css";
import { formatCurrency, formatValue } from "../../utils/number";

const calculateChange = (current, previous) => {
  let change = (current - previous)/100;

  return {
    value: change,
    changeType: change < 0 ? 'decrease' : 'increase'
  }
}

export default function StatsBar({ title, stats }) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-4 text-gray-900">
        {title}
      </h3>
      <dl className="mt-4 mb-4 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => {
          let change = calculateChange(item.stat, item.previousStat);

          return <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.type === 'currency' ? formatCurrency(item.stat) : formatValue(item.stat)}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from {item.type === 'currency' ? formatCurrency(item.previousStat) : formatValue(item.previousStat)}
                </span>
              </div>

              <div
                className={classNames(
                  change.changeType === "increase"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                  "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0",
                )}
              >
                {change.value !== 0 && change.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {" "}
                  {item.change === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {change.value}%
              </div>
            </dd>
          </div>
      })}
      </dl>
    </div>
  );
}
