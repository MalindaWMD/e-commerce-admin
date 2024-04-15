import { Link } from "react-router-dom";
import { abbr } from "../utils/number";

export default function DashboardCard({ card }) {
  return (
    <div key={card.name} className="overflow-hidden rounded-sm bg-white shadow-md">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <card.icon className="h-6 w-6 text-gray-500" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="truncate text-sm font-medium text-gray-500">
                {card.name}
              </dt>
              <dd>
                <div className="text-2xl font-medium text-night">
                  {card.prefix || null}
                  {abbr(card.amount)}
                  {card.suffix || null}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      { card.action && <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <Link
            to={card.action}
            className="text-sm font-medium text-primary-500 hover:text-primary-700"
          >
            View all
          </Link>
        </div>
      </div>}
    </div>
  );
}
