/* eslint-disable react/jsx-props-no-spreading */
import {Controller} from 'react-hook-form';
import makeAnimated from 'react-select/animated';
import Select, {createFilter} from 'react-select';

const CustomMultiSelect = ({
  name,
  label,
  options,
  error,
  control,
  required = false,
  disabled,
  isMulti = false,
  containerClassName,
  isClearable = false,
  isSearchable = false,
  closeMenuOnSelect = false,
  placeholder = 'Elige una o varias opciones...',
}) => {
  const animatedComponents = makeAnimated();
  const inputClassName =
    'appearance-none block w-full rounded-md shadow-sm text-sm';

  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
          {...(required && {'aria-required': true})}
        >
          {label}
        </label>
      )}
      <div className="mt-2 flex">
        <Controller
          name={name}
          control={control}
          render={({field}) => (
            <Select
              isMulti={isMulti}
              options={options}
              closeMenuOnScroll
              isDisabled={disabled}
              isClearable={isClearable}
              placeholder={placeholder}
              isSearchable={isSearchable}
              components={animatedComponents}
              closeMenuOnSelect={closeMenuOnSelect}
              filterOption={createFilter({ignoreAccents: false})}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  paddingTop: '0.10rem',
                  paddingBottom: '0.10rem',
                }),
              }}
              className={`${inputClassName} ${error ? 'custom-MultiSelectError' : 'custom-MultiSelectNoError'}`}
              {...field}
            />
          )}
        />
      </div>
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
};

export default CustomMultiSelect;
