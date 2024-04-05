import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { classNames } from "../../utils/css";
import { user_groups } from "../../data/user_groups";
import { getGroupFromValue } from "../../utils/users";

export default function Example({ defaultValue, onChange }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(
    getGroupFromValue(defaultValue, user_groups),
  );

  const filteredGroups =
    query === ""
      ? user_groups
      : user_groups.filter((group) => {
          return group.label.toLowerCase().includes(query.toLowerCase());
        });

  const handleOnChange = (value) => {
    setSelected(value);
    if (onchange) {
      onchange(value);
    }
  };

  return (
    <Combobox
      as="div"
      defaultValue={defaultValue}
      value={selected}
      onChange={handleOnChange}
    >
      <div className="relative mt-2">
        <Combobox.Input
          className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(group) => group?.label}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredGroups.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredGroups.map((group) => (
              <Combobox.Option
                key={group.value}
                value={group}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9 text-sm",
                    active ? "bg-primary-600 text-white" : "text-gray-900",
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold",
                      )}
                    >
                      {group.label}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-primary-600",
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
