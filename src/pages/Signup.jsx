import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props)
{   
    var navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers

    const [enteredusername,setenteredusername]=useState("")
    const [enteredpassword,setenteredpassword]=useState("")   //password
    const [enteredcpassword,setenteredcpassword]=useState("") //confirm pass
    
    function handleUInput(evt){
        setenteredusername(evt.target.value)
    }

    function handlePInput(evt){
        setenteredpassword(evt.target.value)
    }
    function handleCPInput(evt){
        setenteredcpassword(evt.target.value)
    }

    function addUser(){
        setusers([...users, {username:enteredusername, password:enteredpassword}])
        navigate("/")
    }

    return( 
        <div className=" m-5 mt-20 md:m-10 shadow-md">
            <div className="bg-[#e4e4e4c0] p-10 border rounded-md">
                <h1 className="text-3xl font-medium text-[#FCA201]">Hey Hai ,</h1>
                <p>Sign Up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input value={enteredusername} onChange={handleUInput} type="text"     placeholder="Username" className="w-52  border-black border rounded-md p-1 bg-transparent focus:outline-none"></input>
                    <input value={enteredpassword} onChange={handlePInput} type="password" placeholder="Password" className="w-52  border-black border rounded-md p-1 bg-transparent  focus:outline-none"></input>
                    <input value={enteredcpassword} onChange={handleCPInput} type="password" placeholder="Confirm Password" className="w-52  border-black border rounded-md p-1 bg-transparent focus:outline-none "></input>

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md cursor-pointer" onClick={addUser}>
                        Sign Up
                    </button>

                    <p>Already have an account ?<Link to={"/"} className="text-blue-700">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup