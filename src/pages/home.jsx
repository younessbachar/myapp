import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../components/loading";
import "./home.css"; // Import your CSS file for styling
import Modal from "../shared/Modal";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to the signin page if the user is not logged in
    }
  }, [user]);
  const [showModal, setshowModal] = useState(false);
  const closeModal = () => {
    setshowModal(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page </title>
          <meta
            name="description"
            content="home Page created using create-react-app"
          />
        </Helmet>
        <div>
          <Header />
          <main className="home">
            {/* OPTIONS (filtred data) */}
            <section className="parent-of-btns flex mt">
              <button>Newest first</button>
              <button>Oldest first</button>
              <select id="browsers">
                <option value="ddd">All tasks</option>
                <option value="dddd">Completed</option>
                <option value="ddddd">Not Completed</option>
              </select>
            </section>
            {/* Show all tasks*/}
            <section className="mt flex all-tasks">
              <article dir="auto" className="one-task">
                <Link to="/edit-task">
                  <h2>New task</h2>
                  <ul>
                    <li>sub task 1</li>
                    <li>sub task 2</li>
                  </ul>
                  <p className="time">a day ago</p>
                </Link>
              </article>
            </section>
            {/* Add New task BTN */}
            <section className="mt">
              <button
                onClick={() => {
                  setshowModal(true);
                }}
                className="add-task-btn"
              >
                add New task <i className="fa-solid fa-plus"></i>
              </button>
              {showModal && (
                <Modal closeModal={closeModal}>
                  <div style={{textAlign:"left"}}>
                    <input
                    onChange={(eo) => {}}
                    required
                    placeholder=" Add title : "
                    type="text"
                  />

                  <div>
                      <input
                    onChange={(e) => {e.preventDefault();}}
                    placeholder=" Details : "
                    type="text"
                  />
                  <button>add</button>
                  </div>
                  <button onClick={(eo) => { eo.preventDefault(); }
                  } type="submit">Submit</button>
                  </div>
            
                </Modal>
              )}
            </section>
          </main>
          <Footer />
        </div>
      </>
    );
  } // Add `user` and `navigate` as dependencies
  if (user) {
    if (!user.emailVerified) {
      return (
        <>
          <Header />
          <main>
            <p>Welcome : {user.displayName}</p>
            <p>Please verify your email to continue</p>
            <button
              onClick={() => {
                sendEmailVerification(auth.currentUser).then(() => {
                  // Email verification sent!
                  // ...
                });
              }}
              className="delete"
            >
              Send Email
            </button>
          </main>
          <Footer />
        </>
      );
    }
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page </title>
            <meta
              name="description"
              content="home Page created using create-react-app"
            />
          </Helmet>
          <div>
            <Header />
            <main>
              Welcome: {user.displayName} <span>🧡</span>
            </main>
            <Footer />
          </div>
        </>
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>HOME Page </title>
        <meta
          name="description"
          content="home Page created using create-react-app"
        />
      </Helmet>
      <div>
        <Header />
        {user && (
          <main>
            Welcome: {user.displayName} <span>🧡</span>
          </main>
        )}

        {!user && (
          <main>
            <p className="pls">
              Please{" "}
              <Link
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  padding: "10px",
                  color: "cyan",
                }}
                to="/signin"
              >
                sign in
              </Link>{" "}
              to continue... <span>🧡</span>
            </p>
          </main>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;
