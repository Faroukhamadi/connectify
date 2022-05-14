import { useField } from 'formik';

// TODO: Fix duplication because both
// labelClass and class have the same values

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className={props.labelClass}>
        {label}
      </label>
      <input
        className={props.inputClass}
        {...field}
        {...props}
        autoComplete="off"
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-700 font-sans text-xl font-semibold text-ellipsis">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

export default TextInput;
