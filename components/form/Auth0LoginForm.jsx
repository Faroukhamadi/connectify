import TextInput from './TextInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

const CreateAuth0UserMutation = gql`
  mutation ($first_name: String!, $last_name: String!, $username: String!) {
    createAuth0User(
      first_name: $first_name
      last_name: $last_name
      username: $username
    ) {
      username
      password
      first_name
      last_name
    }
  }
`;

const Auth0LoginForm = ({ setShowLogin }) => {
  const router = useRouter();

  const [createAuth0User, { loading, error }] = useMutation(
    CreateAuth0UserMutation
  );
  const { user } = useUser();

  const onsubmit = async (data) => {
    const { first_name, last_name } = data;
    const username = user.email;
    const variables = { first_name, last_name, username };

    try {
      createAuth0User({ variables });
    } catch (err) {
      console.error(err);
    }
  };

  // TODO: Reset those later with a better waiting state
  // if (error) return <h1>Woops! unexpected error {error.message}</h1>;
  // if (loading) return <h1>Loading...inside Auth0LoginForm</h1>;

  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
      }}
      validationSchema={Yup.object({
        first_name: Yup.string()
          .max(30, 'Must be 30 characters or less')
          .min(3, 'Must be 3 characters at least')
          .required('First name is Required'),
        last_name: Yup.string()
          .max(30, 'Must be 30 characters or less')
          .min(3, 'Must be 3 characters at least')
          .required('Last name is Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        onsubmit(values);
        setSubmitting(false);
        setShowLogin(false);
        // setTimeout(() => {
        // });
        // }, 400);
      }}
    >
      <Form className="flex flex-col">
        <TextInput
          inputClass="min-h-[40px] text-gray-300 font-sans text-lg text bg-discord_dark indent-2 caret-white focus:outline-none"
          labelClass="mb-1 text-gray-300 uppercase font-bold text-sm mt-5"
          label="First Name"
          name="first_name"
          id="first_name"
          type="text"
        />
        <TextInput
          inputClass="min-h-[40px] text-gray-300 font-sans text-lg text bg-discord_dark indent-2 caret-white focus:outline-none"
          labelClass="mb-1 text-gray-300 uppercase font-bold text-sm mt-5"
          label="Last Name"
          name="last_name"
          id="last_name"
          type="text"
        />

        <button
          type="submit"
          className="bg-discord my-4 py-2 rounded-sm px-10 font-medium text-white text-2xl transition-opacity hover:opacity-90 duration-150 ease-in "
        >
          Continue
        </button>
      </Form>
    </Formik>
  );
};

export default Auth0LoginForm;
