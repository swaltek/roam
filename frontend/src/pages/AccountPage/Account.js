import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import "../../styles/account.css"
import ReservationDetails from "./ReservationDetails";
import SavedSites from "./SavedSites";
import PastStays from "./PastStays";

function Account(){


return (
  <div className="container">
    <div> 
         <Sidebar/>
    </div>
    <div className="row">

      <div className="row">
          <UserInfo/>
      </div>
      <hr/>
      <br/>

    <div className="row">
      
        <ReservationDetails/>
      
    </div>
    <hr/>
    <br/>

    <div className="row">
      
        <SavedSites />

    </div>
    <hr/>
    <br/>


    <div className="row">
      
        <PastStays/>
    
    </div>

    

    </div>

  </div>

)
}

export default Account;   