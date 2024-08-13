import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"
function Landing()
{ 
    const currentTime = new Date().toLocaleTimeString(); //for current time
    const currentMonth = new Date().toLocaleString('default', { month: 'long' }); //for current month
    const data = useLocation()
    return(
    <div className="m-4 md:m-10 shadow-md">
        <div className="bg-[#e4e4e4c0] p-10 border rounded-md">

          {/* Header */}

          <Header name={data.state.user}></Header>
          {/* Cards */}

          <div className="flex justify-between gap-7 my-5 flex-wrap ">
            <Card bgcolor={"#576574"} title={"23°"} subtitle={"Chennai"} />
            <Card bgcolor={"#576574"} title={currentMonth} subtitle={currentTime} />
            <Card bgcolor={"#576574"} title={"Build Using"} subtitle={"React"} />
          </div>

          {/* Todocontainer */}
          <Todocontainer />
  
        </div>
      </div>
    )
}
export default Landing