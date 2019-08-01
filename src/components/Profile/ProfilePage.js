import React,{useState} from "react";
import {loadUserInfo} from '../../store/actions/actions'
import {connect} from 'react-redux'
// import { getToken } from "../../auth/localStorage";
// import {decodeToken} from '../../auth/Token'
// import { axiosAuth } from "../../auth/axiosAuth";
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

const ProfilePage = (props) => {
 
 const [initProfile, setProfile] = useState({
  "name": "",
  "email": "",
  "interests": "",
  "pastExperience": "",
  "location": "",
  "profileImg": ""
 })
 
 const [loading, setLoading] = useState(true)



  return (
    <div>
      Profile
    {/* <div>
      <ul>

        {users.map((users,index) => (
          <li key={index}>
            <span>{users.name}</span>
          </li>
      ))}
      </ul>
    </div> */}
    </div>
  )
}
export default connect(null,{loadUserInfo})(ProfilePage);
