import { useContext } from "react"
import UserContext from "../Context/UserContext"
 'react'

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div className="text-white text-lg"> please login</div>
    
    return <div className="text-white text-lg">Welcome {user.username} </div>
  } 

  export default Profile
