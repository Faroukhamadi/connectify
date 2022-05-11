import { gql, useMutation } from '@apollo/client';
import { getSession } from '@auth0/nextjs-auth0';
import { Form, Formik } from 'formik';
import TextInput from '../components/Form/TextInput';

const CreateUserMutation = gql`
  mutation (
    $username: String!
    $password: String!
    $first_name: String!
    $last_name: String!
  ) {
    createUser(
      username: $username
      password: $password
      first_name: $first_name
      last_name: $last_name
    ) {
      username
      password
      first_name
      last_name
    }
  }
`;

const Admin = ({ string }) => {
  const [createUser, { loading, error }] = useMutation(CreateUserMutation);

  const onsubmit = async (data) => {
    const { username, password, first_name, last_name } = data;
    const variables = { username, password, first_name, last_name };

    try {
      createUser({ variables });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        first_name: '',
        last_name: '',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          onsubmit(values);
          setSubmitting(false);
          resetForm({
            values: {
              username: '',
              password: '',
              first_name: '',
              last_name: '',
            },
          });
        }, 400);
      }}
    >
      <Form className="flex flex-col">
        <TextInput
          inputClass="bg-slate-400"
          label="email or phone number"
          name="username"
          id="username"
          type="text"
        />
        <TextInput
          inputClass="bg-slate-400"
          label="password"
          name="password"
          id="password"
          type="password"
        />
        <TextInput
          inputClass="bg-slate-400"
          label="first_name"
          name="first_name"
          id="first_name"
          type="text"
        />
        <TextInput
          inputClass="bg-slate-400"
          label="last_name"
          name="last_name"
          id="last_name"
          type="last_name"
        />
        <button type="submit" className="bg-red-500">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Admin;

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/api/auth/login',
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};
