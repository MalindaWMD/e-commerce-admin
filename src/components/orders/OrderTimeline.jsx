import moment from "moment";
import { classNames } from "../../utils/css";

export default function OrderTimeline({ timeline }) {
  return (
    <div className="mb-6">
      <h2 className="mb-3 text-lg font-medium leading-6 text-gray-900">
        Timeline
      </h2>
      <ul role="list" className="space-y-6">
        {timeline.map((activityItem, activityItemIdx) => (
          <li key={'activity-' + activityItem.id} className="relative flex gap-x-4">
            <div
              className={classNames(
                activityItemIdx === timeline.length - 1 ? "h-6" : "-bottom-6",
                "absolute left-0 top-0 flex w-6 justify-center",
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            <>
              <div className="relative flex h-6 w-6 flex-none items-center justify-center ">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
              </div>
              <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                <span className="font-medium text-gray-900">
                  {activityItem.person.name}
                </span>{" "}
                {activityItem.type} the invoice.
              </p>
              <time
                dateTime={activityItem.dateTime}
                className="flex-none py-0.5 text-xs leading-5 text-gray-500"
              >
                {moment(activityItem.dateTime).fromNow()}
              </time>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}
