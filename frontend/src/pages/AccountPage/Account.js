import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import "../../styles/account.css";
import ReservationDetails from "./ReservationDetails";
import SavedSites from "./SavedSites";
import PastStays from "./PastStays";
import MySites from "./MySites";

function Account(props) {
  return (
    <div className="container">
      <div>
        <Sidebar />
      </div>
      <div className="row">
        <div className="row align-items-start">
          <div className="col">
            <UserInfo user={props.user} setUser={props.setUser} />
          </div>
        </div>
        <hr />
        <br />

        <div className="row align-items-center">
          <div className="col">
            <ReservationDetails />
          </div>
        </div>
        <hr />
        <br />

        <div class="row align-items-end">
          <div class="col">
            <SavedSites user={props.user} setUser={props.user} listing={props.listing}/>
          </div>
        </div>
        <hr />
        <br />

        <div className="row align-items-end">
          <div className="col">
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
