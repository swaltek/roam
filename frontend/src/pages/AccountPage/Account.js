import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import "../../styles/account.css";
import ReservationDetails from "./ReservationDetails";
import SavedSites from "./SavedSites";
import PastStays from "./PastStays";
import MySites from "./MySites";

function Account(props) {
  return (
    <div class="container">
      <div>
        <Sidebar />
      </div>
      <div class="row">
        <div class="row align-items-start">
          <div class="col">
            <UserInfo user={props.user} setUser={props.setUser} />
          </div>
        </div>
        <hr />
        <br />

        <div class="row align-items-center">
          <div class="col">
            <ReservationDetails />
          </div>
        </div>
        <hr />
        <br />

        <div class="row align-items-end">
          <div class="col">
            <SavedSites user={props.user} setUser={props.user} />
          </div>
        </div>
        <hr />
        <br />

        <div class="row align-items-end">
          <div class="col">
            <PastStays />
          </div>
        </div>
        <hr />
        <br />

        <div class="row align-items-end">
          <div class="col">
            <MySites user={props.user}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
