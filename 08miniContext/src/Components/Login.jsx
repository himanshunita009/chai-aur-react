import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        setUser({username,password});
    }
    return ( 
        <div className="login">
            <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
     );
}
 
export default Login;