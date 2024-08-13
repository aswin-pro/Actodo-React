
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props)
{   
    const navigate= useNavigate()
    const [enteredusername,setenteredusername]=useState("")
    const [enteredpassword,setenteredpassword]=useState("")
    const [reguser,setreguser]=useState(true)   

    function handleUInput(evt){
        setenteredusername(evt.target.value)
    }

    function handlePInput(evt){
        setenteredpassword(evt.target.value)
    }

    const users=props.users

    function checkUser()
    {
        var userfound=false
        users.forEach((item)=>{
            if(item.username===enteredusername && item.password===enteredpassword){
                userfound=true
                navigate("/landing",{state:{user:enteredusername}})
            }
        })
        if(userfound===false){
             setreguser(false)
        }
    }
    return(
        <div className=" m-5 mt-20 md:m-10 shadow-md">
            <div className="bg-[#e4e4e4c0] p-10 border rounded-md">
                <h1 className="text-3xl font-medium text-blue-600">Hey Hai ,</h1>
                {reguser?<p>I help you manage your activities after you Login :)</p>:<p className="text-red-600">Please Sign Up before Login</p>}
                

                <div className="flex flex-col gap-2 my-2">
                    <input value={enteredusername} onChange={handleUInput} placeholder="Username" type="text"     className="w-52  border-black border rounded-md p-1 bg-transparent focus:outline-none "></input>
                    <input value={enteredpassword} onChange={handlePInput} placeholder="Password" type="password" className="w-52  border-black border rounded-md p-1 bg-transparent focus:outline-none "></input>

                    <button className="bg-blue-600 text-white w-24 p-1 rounded-md cursor-pointer" onClick={checkUser}>
                        Login
                    </button>

                    <p>Don't have an account ? <Link to={"/signup"} className="text-blue-700">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login