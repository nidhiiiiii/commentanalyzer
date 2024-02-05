import React ,{useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join =()=> {
   const[name,setName]=useState('');
   const [room,setRoom]=useState('');
   return(
      <div className="joinoutercontainer">
         <div className="joininnercontainer">
            <h1 className="heading">Join</h1>
            <div>
               <input placeholder="Name" className="join_input" type="text" onChange={(event)=>setName(event.target.value)}>               
               </input>
            </div>
            <div>
               <input placeholder="Room" className="join_input " type="text" onChange={(event)=>setRoom(event.target.value)}>               
               </input>
            </div> 

            {/* <Link onClick={event=>(!name ||!room)?event.preventDefault():null} to={`/chat?name=${name} & room=${room}`}>  */}
            <Link onClick={event=>(!name ||!room) ? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-20" placeholder='SIGN IN'>SIGN IN</button>
            </Link>
            

         </div>
      </div>
   )
}
export default Join; 