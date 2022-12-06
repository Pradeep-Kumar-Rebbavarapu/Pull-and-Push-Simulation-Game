import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  // const [p_components,setComponents]=useState(null);
  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
    // setComponents({
    //   speaker:0,button:0,screen:0
    // });
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
    // setComponents(null);
  };

  useEffect(() => {

    localStorage.setItem("user", JSON.stringify(currentUser));
    // if(p_components===null){
    //   setComponents({
    //     speaker:0,button:0,screen:0
    //   });
    // }
    // if(currentUser && currentUser.role==="op1"){
    //   console.log(p_components)
    //   localStorage.setItem("p_components",JSON.stringify(p_components));
    //   console.log(localStorage.p_components)      
    // }

  }, [currentUser]);
  

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};