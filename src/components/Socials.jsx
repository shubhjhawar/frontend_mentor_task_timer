import React from 'react'
import hills from "../assets/images/pattern-hills.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pintrest from "../assets/images/icon-pinterest.svg";

const icons = [facebook, instagram, pintrest];

const Socials = () => {
  return (
    <div className="fixed bottom-0 left-0">
  <img
    src={hills}
    alt="hills"
    // className="w-full h-auto"
  />
  <div className="absolute inset-0 flex items-center justify-center text-white  z-10">
    <div className="flex items-center px-2 gap-10">
      {icons.map((icon,index)=> (
        <div>
          <img 
            alt="icon"
            src={icon}
            className=''
          />
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Socials