import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const Signin = () => {
  let navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haserror, seterror] = useState(false)
  const [firebaseError, setfirebaseError] = useState("")
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
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Welcome back! <span>🧡</span>
          </h1>
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
                    navigate("/");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    seterror(true);
                    switch (errorCode) {
                      case "auth/invalid-email":
                        setfirebaseError("The email address is not valid.");
                        break;

                      case "auth/user-disabled":
                        setfirebaseError("This user account has been disabled.");
                        break;

                      case "auth/user-not-found":
                        setfirebaseError("No user found with this email.");
                        break;

                      case "auth/wrong-password":
                        setfirebaseError("The password is incorrect.");
                        break;

                      case "auth/invalid-credential":
                        setfirebaseError("Invalid email or password.");
                        break;

                      default:
                        setfirebaseError("An unexpected error occurred. Please try again.");
                        break;
                    }
                  });
              }}
            >
              Signin
            </button>
            <p className="account">
              D'ont have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        {haserror && <p style={{ color: "red", marginTop: "10px" }}>{firebaseError}</p>}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
