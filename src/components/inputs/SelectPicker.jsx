import { useEffect, useState } from "react";
import Select from "react-select";
import { classNames } from "../../utils/css";

const getSelectedOption = (value, options) => {
  if (value && options) {
    let selected = {};
    options.map((option) => {
      if (option.value === value) {
        selected = option;
        return null;
      }

      return null;
    });

    return selected;
  }

  return null;
};

export default function SelectPicker(props) {
  const [options, setOptions] = useState(props.options || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadOptions();
  }, [props.selected, props.options]);

  const loadOptions = () => {
    if (options.length) {
      return;
    }

    if (props.action) {
      setLoading(true);

      props
        .action()
        .then((response) => {
          setLoading(false);
          setOptions(response);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setOptions(props.options);
    }
  };

  const handleChange = (selected) => {
    if (props.onChange) {
      props.onChange(selected.value, selected);
    }
  };

  return (
    <Select
      className={classNames(
        `focus:ring-secondary-500 focus:border-secondary-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm`,
        props.className,
      )}
      isClearable={true}
      isLoading={loading}
      isSearchable={true}
      onChange={handleChange}
      value={getSelectedOption(props.selected, options)}
      options={options}
      isMulti={props.isMulti}
    />
  );
}
