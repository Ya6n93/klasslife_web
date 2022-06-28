import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Box } from '@mui/material';
import { LockOpen } from '@mui/icons-material';
import * as Yup from 'yup';
import { TextField } from 'formik-mui';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAccessToken } from '@/utils/access_token';
import { Login } from 'klasslife_lib';
import 'react-toastify/dist/ReactToastify.css';
import useLocalStorage from '../../../../pages/Chat/hooks/useLocalStorage';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [id, setId] = useLocalStorage('id');

  const redirectTo = searchParams.get('redirect-to');

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        Login("https://api.klasslife.fr/api", values)
          .then((res) => {
            if (res.error) {
              toast.error(res.error);
            } else {
              console.log(res);
              toast.success('Login success');
              setAccessToken(res.data.token);
              setId(values.email);
              navigate(redirectTo || '/');
            }
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      <Form>
        <Box mb={1}>
          <Field
            name="email"
            type="email"
            label="Email"
            component={TextField}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>
        <Box mb={1}>
          <Field
            name="password"
            type="password"
            label="Password"
            component={TextField}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<LockOpen />}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
