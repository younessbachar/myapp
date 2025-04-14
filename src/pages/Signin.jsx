import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Helmet>
        <title>Signin Page</title>
        <meta
          name="description"
          content="Signin Page created using create-react-app"
        />
      </Helmet>
      <Header />
      <main>
        <>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Welcome back! <span>🧡</span>
          </h1>
          <br />
          <form>
            <input
              onChange={(eo) => {
                setEmail(eo.target.value);
              }}
              required
              placeholder="Email"
              type="email"
            />
            <input onChange={(eo)=>{
                setPassword(eo.target.value)
            }} required placeholder="password" type="password" />
            <button
              onClick={(eo) => {
                eo.preventDefault();
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  });
              }}
            >
              Signin
            </button>
            <p className="account">
              D'ont have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
