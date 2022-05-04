import TextInput from './TextInput';
import Link from 'next/link';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(40, 'Must be 40 characters or less')
          .required('Required')
          .email('Invalid Email format'),
        password: Yup.string().matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          `Invalid Password format`
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log('submitted');
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="flex flex-col">
        <TextInput
          class="min-h-[40px] text-gray-300 font-sans text-lg text bg-discord_dark indent-2 caret-white focus:outline-none"
          labelClass="mb-1 text-gray-300 uppercase font-bold text-sm mt-5"
          label="email or phone number"
          name="username"
          id="username"
          type="text"
        />
        <TextInput
          class="min-h-[40px] text-gray-300 font-sans text-lg text bg-discord_dark indent-2 caret-white focus:outline-none"
          labelClass="mb-1 text-gray-300 uppercase font-bold text-sm mt-5"
          label="password"
          name="password"
          id="password"
          type="password"
        />
        <Link href="#">
          <a className="text-sky-500 text-sm font-semibold font-sans mt-1">
            Forgot your password?
          </a>
        </Link>
        <button
          type="submit"
          className="bg-discord my-4 py-2 rounded-sm px-10 font-medium text-white text-2xl transition-opacity hover:opacity-90 duration-150 ease-in "
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
