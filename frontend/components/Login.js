import { observer } from 'mobx-react';

import Typography from '@wui/basics/typography';

import { login } from '@@/utils/API';
import KeepParamsLink from '@@/components/KeepParamsLink';
import AuthBase from './AuthBase';

const Login = () => {
  return (
    <AuthBase submitCredentials={login} submitText="Login" headerText="Login">
      <Typography>
        Don't have an account?&nbsp;
        <KeepParamsLink href="/register">
          <a>Create Account</a>
        </KeepParamsLink>
      </Typography>
      <Typography>
        Forgot your password?&nbsp;
        <KeepParamsLink href="/reset-password">
          <a>Reset Password</a>
        </KeepParamsLink>
      </Typography>
    </AuthBase>
  );
};

export default observer(Login);
