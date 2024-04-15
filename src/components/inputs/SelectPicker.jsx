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
        `w-full rounded-md py-1 text-sm text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`,
        props.className,
      )}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderRadius: '0.125rem',
          borderColor: state.isFocused ? '#3775D2' : '#d1d5db',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1'
        }),
      }}
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
