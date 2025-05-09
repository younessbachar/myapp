import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/loading";

const Signup = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatpassword, setrepeatpassword] = useState("");
  const [haserror, seterror] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [userName, setuserName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user && user.emailVerified) {
      navigate("/");
    }
  });

  const signupForm = (eo) => {
    eo.preventDefault();
    if (password !== repeatpassword) {
      seterror(true);
      setfirebaseError("passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
        });

        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.code);
          });

        // ...
        console.log("done");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(true);

        switch (errorCode) {
          case "auth/invalid-email":
            setfirebaseError("The email address is not valid.");
            break;

          case "auth/wrong-password":
            setfirebaseError("The password is incorrect.");
            break;

          case "auth/email-already-in-use":
            setfirebaseError(
              "The email address is already in use by another account."
            );
            break;

          case "auth/weak-password":
            setfirebaseError("The password must be 6 characters long or more.");
            break;

          default:
            setfirebaseError("An unknown error occurred.");
            break;
        }

        // ..

        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const sendEmailagain = () => sendEmailVerification(auth.currentUser)
  //loading
  //Not signin
  //signin without verification
  //(signin && verified email)

  if (loading) {
    return <Loading />;
  }

  if (!user) {
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Create a new account <span>🧡</span>
            </h1>
            <form>
              <input
                onChange={(eo) => {
                  setuserName(eo.target.value);
                }}
                required
                type="text"
                placeholder="Username"
              />
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
                  setpassword(eo.target.value);
                }}
                required
                placeholder="password"
                type="password"
              />
              <input
                onChange={(eo) => {
                  setrepeatpassword(eo.target.value);
                }}
                required
                placeholder="repeat password"
                type="password"
              />
              <button
                onClick={(eo) => {
                  signupForm(eo);
                }}
              >
                Signup
              </button>
              <p className="account">
                Alredy have an account?<Link to="/signin">Signin</Link>
              </p>
            </form>
            {haserror && <p style={{ color: "red" }}>{firebaseError}</p>}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!user.emailVerified) {
    return (
      <>
        <Header />
        <main>
          <p>We send you an email to verify your account</p>
          <button
            onClick={sendEmailagain}
            className="delete"
          >
            Send Email
          </button>
        </main>
        <Footer />
      </>
    );
  }
};

export default Signup;
