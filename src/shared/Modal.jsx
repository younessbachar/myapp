import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

/*
  const [showModal, setshowModal] = useState(false);
  const closeModal = () => { 
    setshowModal(false);
   }
*/
// closeModal => function to close the modal from parent component
const Modal = ({ open, onClose, children }) => {
  const [closeModel, setcloseModal] = useState(false);
  useEffect(() => {
    setcloseModal(false);
  }, [open]);
  return (
    <div
      className={`parent-of-model `}
      style={{ display: open ? "flex" : "none" }}
    >
      <Helmet>
        <style>
          {`
          .parent-of-model {
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;

          background-color: rgba(0, 0, 0, 0.45);
          align-items: center;
          justify-content: center;
}

        .modal {
         background-color: whitesmoke;
         width: 400px;
         height: 333px;
         border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        animation: showModal 0.8s;
      }
     
      @keyframes showModal {
        0% {scale: 0; transform: translateY(-100vh);}
        100% {scale: 1; transform: translateY(0);}
      }

      .onClose {
          animation: closeModal 0.8s;
          }
      @keyframes closeModal {
        0% {scale: 1; transform: translateY(0);}
        100% {scale: 0; transform: translateY(-100vh);}
      }    
          


.close .fa-xmark {
  font-size: 29px;
  color: #444;
  position: absolute;
  top: 17px;
  right: 22px;
}

.close .fa-xmark:hover {
  color: orange;
  font-size: 30px;
  transform: rotate(180deg);
  transition: 0.3s;
  cursor: pointer;
}
   .modal {
          background-color: whitesmoke;
        width: 400px;
  height: 333px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  transition: 1s;
  scale: 1;
  transform: translateY(0);
}



.close .fa-xmark {
  font-size: 29px;
  color: #444;
  position: absolute;
  top: 17px;
  right: 22px;
}

.close .fa-xmark:hover {
  color: orange;
  font-size: 30px;
  transform: rotate(180deg);
  transition: 0.3s;
  cursor: pointer;
}
        `}
        </style>
      </Helmet>
      <form className={`modal ${closeModel && "onClose"}`}>
        <div
          onClick={() => {
            setcloseModal(true);
            setTimeout(() => {
              onClose();
            }, 800);
          }}
          className="close"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        {children}
      </form>
    </div>
  );
};

export default Modal;

/*  */
