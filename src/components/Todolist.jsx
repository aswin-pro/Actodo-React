import { useState } from "react"
import Todoitem from "./Todoitem"

function Todolist(props) {

    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    function clearAll()
    {
        setactivityarr([])
    }
    return (
        <>
            <div className="bg-[#5b86bb]  border rounded-md p-3 flex-grow shadow-md">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                
                {
                    activityarr.map((item,index)=>{
                        return(
                            <Todoitem id={item} item={item} index={index} activityarr={activityarr} setactivityarr={setactivityarr}/>
                            
                        )
                    })
                    
                }
                {activityarr.length===0?<p>You haven't added anything yet</p>:<button onClick={clearAll} className="text-red-700 drop-shadow-md">Clear All</button>}
                
               
            </div>
            
        </>
    )
}
export default Todolist