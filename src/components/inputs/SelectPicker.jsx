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
        `focus:ring-primary-600 w-full rounded-md py-1 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`,
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
