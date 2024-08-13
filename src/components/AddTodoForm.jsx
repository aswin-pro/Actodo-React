import { useState } from "react"

function AddTodoForm(props) {

    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    const [newactivity,setnewactivity]=useState("")

    const handleChange=(evt)=>{
        setnewactivity(evt.target.value)
    }
    const handleAdd=()=>{
        setactivityarr([
            ...activityarr, 
            { id: activityarr.length + 1, activity: newactivity }
        ]);
        setnewactivity("")
        
    }
    return (
        <>
            <div className="flex flex-col gap-2"> 
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 flex-wrap">
                    <input value={newactivity} onChange={handleChange} type="text" placeholder="Next Activity ?" className="border border-black bg-transparent p-1 focus:outline-none" />
                    <button onClick={handleAdd} className="bg-blue-700 text-white p-1 border  w-16 border-blue-700">Add</button>
                </div>
            </div>
            </div> 
        </>
    )
}
export default AddTodoForm