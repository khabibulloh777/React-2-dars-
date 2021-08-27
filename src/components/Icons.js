import React , {useState} from 'react'
import './Icons.css'
import {FiArchive , FiUsers , FiUser , FiVolume2} from 'react-icons/fi'


function header() {
  const [isOpen, setIsOpen]= useState(false)

  const showoptions =(e) => {
    if(! isOpen){
    const options = document.querySelector('.options')
    options.classList.add("active");
    setIsOpen(true)
  }
  else {
    const options = document.querySelector('.options')
    options.classList.remove("active");
    setIsOpen(false)
  }
  }
  const hideoptions = (e) => {
    const options = document.querySelector('.options')
    options.classList.remove("active");
  }
    return (
        <button className="icon"  onFocus={showoptions}  onBlur={hideoptions}>
       <FiArchive/>
       <div className="options">
         <ul className="archive__options">
           <div className="archive__option"> <FiUsers/>  Groups</div>
           <div className="archive__option"><FiVolume2 />  Channels</div>
           <div className="archive__option"><FiUser/>  Personal Chat</div>
         </ul>
       </div>
      
        </button>
    )
}

export default header


