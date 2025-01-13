import React from 'react';
import  '../1-Header/Header.css';
import { useState } from 'react';

 const Header = () => {
    const [showmodel ,setshowmodel] = useState(false)
  
    return (
  <header className='flex'>
       <button  onClick={() => {
        setshowmodel(true)
    }} className='menu fa-solid fa-bars'> </button>


    <div/>
 


     <nav>
        <ul className='flex'>
            <li>
                <a href="">About</a>
            </li>

            <li>
              <a href="">Articles</a>
            </li>

            <li>
              <a href="">Project</a>
            </li>

            <li>
               <a href="">Speking</a>
            </li>

            <li>
               <a href="">Contact</a>
            </li>
        </ul>

     </nav>


     <button class="fa-solid fa-moon fa-2x"  style={{fontSize:"20px"}}></button>

  

        {showmodel && (
    <div className='fixed '>
    <ul className='model'>
        <li>
            <button className='fa-solid fa-xmark fa-2x icon-close'   onClick={() => {
                setshowmodel(false)
            }}></button> 
        </li>
        <li><a href="">About</a></li>
        <li><a href="">Articles</a></li>
        <li><a href="">Project</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Users</a></li>
    </ul>


</div>
        )}
    



   
</header>
    );
}

export default Header;
