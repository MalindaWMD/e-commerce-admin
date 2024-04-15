import { Link } from "react-router-dom";
import { abbr } from "../utils/number";

export default function DashboardCard({ card }) {
  let change = 0;
  
  if(card.amount && card.previousAmount){
    change = (card.amount - card.previousAmount)/100;
  }

  return (
    <div key={card.name} className="overflow-hidden rounded-sm bg-white shadow-md">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {card.icon && <card.icon className="h-6 w-6 text-gray-500" aria-hidden="true" />}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="truncate text-sm font-medium text-gray-500">
                {card.name}
              </dt>
              <dd className="flex justify-start items-end">
                <div className="text-2xl font-medium text-night">
                  {card.prefix || null}
                  {abbr(card.amount)}
                  {card.suffix || null}
                </div>
                { change ? 
                <>
                <div className="text-gray-500 text-sm pl-1">
                  from  
                  <span className="pl-1">
                    {card.prefix || null}
                    {abbr(card.previousAmount)}
                    {card.suffix || null}
                  </span>
                </div>
                <span className="pl-1 bg-green-200 text-xs rounded-md text-green-800 px-1 text-center mx-1">
                {change}%
                </span>
                </> : null}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      { card.action && <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <Link
            to={card.action}
            className="text-sm font-medium text-denim-500 hover:text-denim-700"
          >
            View all
          </Link>
        </div>
      </div>}
    </div>
  );
}
