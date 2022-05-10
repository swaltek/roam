import UserInfo from "./UserInfo";
import "../../styles/account.css";
import ReservationDetails from "./ReservationDetails";
import SavedSites from "./SavedSites";
import PastStays from "./PastStays";
import MySites from "./MySites";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Account(props) {
  return (
    <div className="container">
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
