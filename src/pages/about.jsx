import React, { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { MainContent } from '../components/MainContent'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'

const About = () => {
  const [user, loading, error] = useAuthState(auth)
  let navigate = useNavigate();
  useEffect(()=>{
    if(!user && !loading){
      navigate("/");
    }
    if(user && !user.emailVerified){
      navigate("/")
    }
  })
  return (
    
      <>
        <Header />
        <MainContent PageName="about page" />
        <Footer />
      </>   
  )
}

export default About