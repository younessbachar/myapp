import React, { useEffect, useState } from "react";
import "./signin.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/loading";

const Signin = () => {
  let navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haserror, seterror] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [showSendemail, setshowSendemail] = useState(false);
  const [showform, setshowform] = useState("");
  const [resetemail, setresetemail] = useState("");


  useEffect(() => {
    if (user && user.emailVerified) {
      navigate("/");
    }
  });

   const SigninForm = (eo) =>{
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
            setfirebaseError(
              "This user account has been disabled."
            );
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
            setfirebaseError(
              "An unexpected error occurred. Please try again."
            );
            break;
        }
      });
  
   }

   const ForgotPassword = (eo)=>{
    eo.preventDefault();
    sendPasswordResetEmail(auth, resetemail)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        
        console.log(errorCode);
        // ..
      });
    setshowSendemail(true);
   }

  if(loading){
    return(
      <Loading />
    )
  }
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
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
            <input
              onChange={(eo) => {
                setPassword(eo.target.value);
              }}
              required
              placeholder="password"
              type="password"
            />
            <button
              onClick={(eo) => {
                SigninForm(eo)
              }}
            >
              Signin
            </button>
            <p className="account">
              D'ont have an account? <Link to="/signup">Signup</Link>
            </p>
            <p
              onClick={() => {
                setshowform("showforgotpassword");
              }}
              className="forgotpass"
            >
              forgot password ?
            </p>
          </form>
          {haserror && (
            <p style={{ color: "red", marginTop: "10px" }}>{firebaseError}</p>
          )}
        </div>
        <form className={`forgotpassword ${showform}`}>
          <div
            className="close"
            onClick={() => {
              setshowform("");
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <input onChange={(eo) => setresetemail(eo.target.value)} required placeholder="Email" type="email" />
          <button
            onClick={(eo) => {
              ForgotPassword(eo);
            }}
          >
            Reset password
          </button>
          {showSendemail && (
            <p className="check-email">
              Please check your email to reset your password
            </p>
          )}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
