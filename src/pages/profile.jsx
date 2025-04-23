import React, {  useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { deleteUser } from 'firebase/auth';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  useEffect(() => {
    if (!loading && !user) {
      navigate("/"); 
    }
    if(user && !user.emailVerified){
      navigate("/"); 
    }
  }); 


  if (loading) {
    return (
  <div>
      <Header />
      <main>
        <h3>Loading........</h3>
      </main>
      <Footer />
  </div>

    ) // Show a loading message while the auth state is being determined
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle any errors from `useAuthState`
  }

  if(user){
  return (
    <>
    <Header />
    <main style={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexDirection:"column", fontSize:"30px", gap:"20px", width:"fit-content", margin:"auto"}}>
      <p>username: {user?.displayName || "N/A"}</p>
      <p>email: {user.email}</p>
      <p>created at: <Moment from={user.metadata.creationTime} /></p>
      <p>last login: <Moment from={user.metadata.lastSignInTime} /></p>
      <button onClick={()=>{
        deleteUser(user).then(() => {
          // User deleted.
          console.log("user deleted");
        }).catch((error) => {
          // An error ocurred
          // ...
        });
      }} className='delete'>Delete account</button>
    </main >
    <Footer />
    </>
  )
}
}


export default Profile
