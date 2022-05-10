import UserInfo from "./UserInfo";
import "../../styles/account.css";
import ReservationDetails from "./ReservationDetails";
import SavedSites from "./SavedSites";
import PastStays from "./PastStays";
import MySites from "./MySites";

function Account(props) {
  return (
    <div className="container centerBlockElement">
      
      <h1 className="fullWidth exploreHeader">Account Details</h1>

      <div className="fullWidth">
        <UserInfo user={props.user} setUser={props.setUser} />
      </div>

      <div className="fullWidth ">
        <ReservationDetails />
      </div>

      <div className="fullWidth ">
        <SavedSites user={props.user} setUser={props.user}/>
      </div>

      <div className="fullWidth ">
        <PastStays />
      </div>

      <div class="fullWidth ">
        <MySites user={props.user}/>
      </div>

    </div>
  );
}

export default Account;
