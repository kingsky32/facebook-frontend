import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOCAL_LOG_IN, LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const password = useInput("");

  const [logInMutation] = useMutation(LOG_IN, {
    variables: { email: email.value, password: password.value }
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      password: password.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
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
        toast.error("Wrong email/password combination");
      }
    } else {
      toast.error("Email is required");
    }
  };

  const onSignUp = async e => {
    e.preventDefault();
    if (
      email.value !== "" &&
      password.value !== "" &&
      username.value !== "" &&
      firstName.value !== "" &&
      lastName.value !== ""
    ) {
      try {
        const { data: { createAccount } } = await createAccountMutation();
        if (!createAccount) {
          toast.error("Can't create account");
        } else {
          toast.success("Account created! Log In now");
          setTimeout(onToggleSignUp, 1500);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("All field are required");
    }
  };

  const onToggleSignUp = e => {
    e && e.preventDefault();
    isSignUp ? setIsSignUp(false) : setIsSignUp(true);
  };

  return (
    <AuthPresenter
      firstName={firstName}
      lastName={lastName}
      username={username}
      email={email}
      password={password}
      onSubmit={onSubmit}
      onSignUp={onSignUp}
      isSignUp={isSignUp}
      onToggleSignUp={onToggleSignUp}
    />
  );
};
