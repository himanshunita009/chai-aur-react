import { useEffect, useState } from "react";

const Github = () => {
    const [userData,setUserData] = useState(0);
    useEffect(() => {
        fetch('https://api.github.com/users/himanshunita009')
            .then(res => res.json())
            .then((user) => {
                setUserData(user); 
                console.log(user)
        });
    },[]);
    return ( 
        <div>Github : {userData.following                                                                                                                                                                                                                   }</div>
     );
}
 
export default Github;