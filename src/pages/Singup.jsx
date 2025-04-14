import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("")
  return (
    <>
      <Helmet>
        <title>Signup Page</title>
        <meta
          name="description"
          content="Signup Page created using create-react-app"
        />
      </Helmet>
      <Header />
      <main>
      <h1 style={{textAlign:"center", marginBottom:"20px"
          }}>Create a new account <span>🧡</span></h1>
      <form>
          <input onChange={(eo)=>{
            setEmail(eo.target.value);
          }} required placeholder="Email" type="email" />
          <input onChange={(eo)=>{
            setpassword(eo.target.value);
          }} required placeholder="password" type="password" />
          <button onClick={(eo)=>{
            eo.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              // ...
              console.log("done");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              // ..
            });
          }}>Signup</button>
          <p className="account">Alredy have an account?<Link to="/signin">Signin</Link></p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;