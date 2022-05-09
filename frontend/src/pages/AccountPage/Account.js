import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import "../../styles/account.css";
import ReservationDetails from "./ReservationDetails";
import SavedSites from "./SavedSites";
import PastStays from "./PastStays";

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

        <div className="row align-items-end">
          <div className="col">
            <SavedSites user={props.user} setUser={props.user} />
          </div>
        </div>
        <hr />
        <br />

        <div className="row align-items-end">
          <div className="col">
            <PastStays />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
