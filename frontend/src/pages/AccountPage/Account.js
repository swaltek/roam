import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import "../../styles/account.css"
import ReservationDetails from "./ReservationDetails";
import SavedSites from "./SavedSites"
import PastStays from "./PastStays";

function Account(){


return (
  <div class="container">
    <div> 
         <Sidebar/>
    </div>
    <div class="row">

      <div class="row align-items-start">
        <div class="col">
          <UserInfo/>
        </div>
      </div>
      <hr/>
      <br/>

    <div class="row align-items-center">
      <div class="col">
        <ReservationDetails/>
      </div>
    </div>
    <hr/>
    <br/>

    <div class="row align-items-end">
      <div class="col">
        <SavedSites/>
      </div>
    </div>
    <hr/>
    <br/>


    <div class="row align-items-end">
      <div class="col">
        <PastStays/>
      </div>
    </div>

    

    </div>

  </div>

)
}

export default Account;   