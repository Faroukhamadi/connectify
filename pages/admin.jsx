import { gql, useMutation } from '@apollo/client';
import { getSession } from '@auth0/nextjs-auth0';
import { Form, Formik } from 'formik';
import TextInput from '../components/form/TextInput';

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

const Admin = () => {
  const [createUser, { loading, error }] = useMutation(CreateUserMutation, {
    onCompleted: () => reset(),
  });

  const onsubmit = async (data) => {
    const { username, password, first_name, last_name } = data;
    const variables = { username, password, first_name, last_name };

    console.log('OnSubmit function is running yayy!!', { variables });

    try {
      console.log('hello1');
      createUser({
        variables: {
          username: variables.username,
          password: variables.password,
          first_name: variables.first_name,
          last_name: variables.last_name,
        },
      });
      // const response = await createUser({
      //   variables: {
      //     id: variables.id,
      //     username: variables.username,
      //     password: variables.password,
      //     first_name: variables.first_name,
      //     last_name: variables.last_name,
      //   },
      // });
      console.log('hello2');
      console.log(response);
    } catch (err) {
      console.log(err);
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log('These are the values', values);
          console.log('submitted');
          onsubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="flex flex-col">
        <TextInput
          class="bg-slate-400"
          label="email or phone number"
          name="username"
          id="username"
          type="text"
        />
        <TextInput
          class="bg-slate-400"
          label="password"
          name="password"
          id="password"
          type="password"
        />
        <TextInput
          class="bg-slate-400"
          label="first_name"
          name="first_name"
          id="first_name"
          type="text"
        />
        <TextInput
          class="bg-slate-400"
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
