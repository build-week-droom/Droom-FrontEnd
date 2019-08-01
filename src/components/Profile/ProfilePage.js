import React from "react";
import {loadUserInfo} from '../../store/actions/actions'
import {connect} from 'react-redux'
// import { Link } from "react-router-dom";
//This is a dummy component with no API functionality ***
// const ProfilePage =({ people}) => {
 

//   return (<div>
//     {people.map((item,index)=>{
// const {name,email,interests,pastExperience,location,id} = item
//      return( <div className="main-wrapper">
//       <div className="profile-page">
//         <div>{name}</div>
//         <div>{email}</div>
//         <div>{interests}</div>
//         <div>{pastExperience}</div>
//         <div>{location}</div>
//         <Link to={`/edit/${id}`}>Edit</Link>
//       </div>
//     </div>)




//     })}</div>
  
//   );
// };

const ProfilePage = () => {
  return (
    <div>Profile</div>
  )
}
export default connect(null,{loadUserInfo})(ProfilePage);
