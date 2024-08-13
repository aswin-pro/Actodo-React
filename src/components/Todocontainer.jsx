import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import Todolist from "./Todolist"
function Todocontainer() {

    const [activityarr,setactivityarr]=useState([
        {
            id:1,
            activity:"Activity One"
        },
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">

                <AddTodoForm activityarr={activityarr} setactivityarr={setactivityarr} />
                <Todolist activityarr={activityarr} setactivityarr={setactivityarr} />
            
            </div>
        </div>
    )
}
export default Todocontainer