import apiCalls from "../../api/apiCalls";
import { useEffect, useState } from "react";
import ReservationCard from "../../components/ReservationCard";
import imageURL from "../../static/branding/listing-default-image.png";
import { Grid, GridItem } from "@chakra-ui/react";

function ReservationDetails() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    const data = await apiCalls.getAllReservations();
    setReservations(data ? data : []);
  };

  const removeReservation = (deleteReservationById) => {
    const updatedReservations = reservations.filter((reservation) => {
      return reservation.id !== deleteReservationById;
    });
    setReservations(updatedReservations);
  };

  const renderReservations = () => {
    return reservations.map((reservation, index) => {
      const handleDeleteReservation = async () => {
        const data = await apiCalls.deleteReservationById(reservation.id);
        if (data) {
          removeReservation(reservation.id);
        } else {
          console.error("ERROR");
        }
      };

      return (
        <GridItem>
          <ReservationCard
            key={reservation.id}
            name={reservation.listing_name}
            imageUrl={imageURL}
            startDate={reservation.date_start}
            endDate={reservation.date_end}
            price={reservation.total}
            buttonClick={handleDeleteReservation}
          />
        </GridItem>
      );
    });
  };

<<<<<<< HEAD
  return <Grid autoRows={"auto"}>{renderReservations()}</Grid>;
=======
  return (
        <div>
          <div className="padding">
            <div>
              <h1 className="exploreHeader">Current Reservations</h1>
              { renderReservations() }
            </div>
          </div>
        </div>
  )
>>>>>>> e0232fe800a40a2aada46981e03e9f110e3160f5
}

export default ReservationDetails;
