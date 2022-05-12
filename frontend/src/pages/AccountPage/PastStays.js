import apiCalls from "../../api/apiCalls";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import HeadingText from "../../components/HeadingText";

function PastStays() {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  const [pastReservations, setPastReservations] = useState([]);

  useEffect(() => {
    getPastReservations();
  }, []);

  const getPastReservations = async () => {
    const data = await apiCalls.getAllReservations();
    let pastRes = [];
    if (data) {
      pastRes = data.filter((reservation) => {
        if (new Date(reservation.date_end) < new Date(today)) {
          return reservation;
        }
      });
    }
    setPastReservations(pastRes);
  };

  const loadPastReservations = () => {
    return pastReservations.map((reservation, index) => {
      return (
        <div
          className="box neutral2 padding text-center "
          key={`past_res_${index}`}
        >
          <h4 className="heavyText genericSecondaryHeader">
            {reservation.listing_name}
          </h4>
          <h4>{reservation.date_start}</h4>
          <h4>{reservation.date_end}</h4>
          <h4>${reservation.total}</h4>
        </div>
      );
    });
  };

  const renderContent = () => {
    if (pastReservations === []) {
      return <Text>You havn't made any bookings Yet!</Text>;
    } else {
      return <>{loadPastReservations()}</>;
    }
  };

  return (
    <>
      <HeadingText text="Past Stays" />
      {renderContent()}
    </>
  );
}

export default PastStays;
