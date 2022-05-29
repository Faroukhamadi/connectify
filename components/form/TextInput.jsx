import { useField } from 'formik';

const TextInput = ({ label, labelClass, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className={labelClass}>
        {label}
      </label>
      <input {...field} {...props} autoComplete="off" />
      {meta.touched && meta.error ? (
        <div className="error text-red-700 font-sans text-xl font-semibold text-ellipsis">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

export default TextInput;
