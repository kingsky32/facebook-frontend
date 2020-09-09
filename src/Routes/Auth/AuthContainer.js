import React from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOCAL_LOG_IN, LOG_IN } from "./AuthQueries";

export default () => {
  const email = useInput("");
  const password = useInput("");

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
          localLogInMutation({ variables: { token } });
          window.location.reload(false);
        } else {
          throw Error();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Email is required");
    }
  };

  return <AuthPresenter email={email} password={password} onSubmit={onSubmit} />;
};
