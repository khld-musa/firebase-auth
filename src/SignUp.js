import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import './form.css';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <body class="text-center bg-light">
      <main class="form-signin">
        <form onSubmit={handleSignUp}>
          <img class="mb-4" src="/assets/img/k.jpg" alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal"> register</h1>
          <input class="form-control" name="name" type="text" placeholder="User name" />
          <input class="form-control" name="email" type="email" placeholder="Email" />
          <input class="form-control" name="password" type="password" placeholder="Password" />
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
        </form>
        have an account     <a href="/login">login</a>
      </main>
    </body>
  );
};

export default withRouter(SignUp);
