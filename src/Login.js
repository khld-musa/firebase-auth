import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import './form.css';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <body class="text-center bg-light">
      <main class="form-signin">
        <form onSubmit={handleLogin}>
          <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <input class="form-control" name="email" type="email" placeholder="Email" />
          <input class="form-control" name="password" type="password" placeholder="Password" />
          <button class="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
        </form>
        don't have an account  <a href="/signup">signup</a>
      </main>


    </body>
  );
};

export default withRouter(Login);
