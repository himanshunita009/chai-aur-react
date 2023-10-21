import { useContext } from 'react';
import UserContext from '../context/UserContext';


const Profile = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    if(!user)
    return ( 
        <div>
            Please Login 
        </div>
     );
    
     return (
        <div> 

            Profile: {user.username}
        </div>
     )
}
 
export default Profile;