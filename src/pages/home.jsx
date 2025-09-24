import React, { use, useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { auth ,db} from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../components/loading";
import "./home.css"; // Import your CSS file for styling
import Modal from "../shared/Modal";
import { doc, setDoc } from "firebase/firestore"; 
import ReactLoading from 'react-loading';

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const [subtask, setSubtask] = useState([]);
  const [subtaskInput, setSubtaskInput] = useState("");
  const [title, setTitle] = useState("");
  const [showloading, setShowloading] = useState(false);
  const [showmessage, setshowmessage] = useState(false)
  
  const addSubtask = (eo)=> {
    eo.preventDefault();
    if(!subtaskInput) return;
    subtaskInput.trim() &&
    setSubtask([...subtask, subtaskInput])
    setSubtaskInput("");

  }

    

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
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />

        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... <span><i className="fa-solid fa-heart"></i></span>
          </p>
        </main>

        <Footer />
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

                <Modal open={showModal} onClose={closeModal}>
                  <div style={{textAlign:"left"}}>
                    <input
                    onChange={(eo) => {setTitle(eo.target.value);}}
                    required
                    placeholder=" Add title : "
                    type="text"
                    value={title}
                  />

                  <div>
                      <input
                    onChange={(e) => {setSubtaskInput(e.target.value) ;e.preventDefault();}}
                    placeholder=" Details : "
                    type="text"
                    value={subtaskInput}
                    style={{marginRight: "5px"}}
                  />
                  <button onClick={addSubtask}>add</button>
                  </div>

                  <ul style={{maxHeight:"100px", overflowY:"auto"}}>
                    {subtask.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <button onClick={async (eo) => { 
                    eo.preventDefault()

                    
                    if(title){
                    setShowloading(true)
                    const taskid = new Date().getTime()  
                    await setDoc(doc(db, user.uid, `${taskid}`), {
                    title: title,
                    details: subtask,
                    id: taskid,
                     }); 
                      setshowModal(false);
                      setSubtask([]);
                      setTitle("");
                      setSubtaskInput("")
                      setShowloading(false)
                      setshowmessage(true)
                      
                      setTimeout(() => {
                        setshowmessage(false)
                      }, 4000);

                      }
                  
                  ; }
                  }
                    type="submit">
                      { showloading ? <ReactLoading type={"spin"} color={"white"} height={20} width={20} /> : "Submit" }
                    </button>
                  </div>
            
                </Modal>
              
            </section>
            <p style={{right: showmessage ? "18px" : "-100vw"}} className="success">Task added successfully <i class="fa-regular fa-circle-check"></i></p>
          </main>
          <Footer />
        </div>
      </>
      );
    }
  }

};

export default Home;
