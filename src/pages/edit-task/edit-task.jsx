import React from 'react'
import "./edit-task.css"
import { Helmet } from 'react-helmet-async'
import Header from "../../components/header"
import Footer from "../../components/footer"

const EditTask = () => {
  return (
     <>
       <Helmet>
        <title>HOME Page </title>
         <meta
           name="description"
           content="home Page created using create-react-app"
        />
       </Helmet>
       <Header/>
       <div className='edit-task'>
         {/* Title */}
         <section className='title center'>
           <h1>
            <input type="text" value={"Title"} className='title-input center' />
            <i class="fa-solid fa-pen-to-square"></i>
           </h1>
         </section>
         {/* subTask */}
         <section className='subtask'>
            <div className='parent-time'>
              <p className='time'>created: 3 day ago</p>
              <div>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Completed</label>
              </div>
            </div>
            <ul>
              <li className='card-task'>
                <p>subtask</p>
                <i className="fa-solid fa-trash"></i>
              </li>
              <li className='card-task'>
                <p>subtask</p>
                <i className="fa-solid fa-trash"></i>
              </li>
            </ul>
         </section>
         {/* Add-more BTN && DeleteBTN */}
         <section className='center mtt'>
             <div><button className='add-more-btn'>
              add more <i className="fa-solid fa-plus"></i>
             </button>
             </div>
             <button className='delete mt'>
              Delete task
             </button>
         </section>
       </div>
       <Footer />
     </>
  )
}

export default EditTask