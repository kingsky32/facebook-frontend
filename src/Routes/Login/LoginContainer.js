import React from "react";
import LoginPresenter from "./LoginPresenter";
import { toast } from "react-toastify";
import { LOCAL_LOG_IN, LOG_IN } from "./LoginQueries";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";
import { withRouter } from "react-router-dom";

const LoginContainer = ({ history }) => {
  const email = useInput();
  const password = useInput();

  const [logInMutation] = useMutation(LOG_IN, {
    variables: { email: email.value, password: password.value }
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async e => {
    e.preventDefault();
    if (email.value !== "") {
      try {
        const { data: { logIn: token } } = await logInMutation();
        if (token !== "" && token !== undefined) {
          history.push("/");
          localLogInMutation({ variables: { token } });
          window.location.reload(false);
        } else {
          throw Error();
        }
      } catch (error) {
        toast.error("Wrong email/password combination");
      }
    } else {
      toast.error("Email is required");
    }
  };

  return <LoginPresenter onSubmit={onSubmit} email={email} password={password} />;
};

export default withRouter(LoginContainer);
