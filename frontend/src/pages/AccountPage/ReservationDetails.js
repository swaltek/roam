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
<<<<<<< HEAD
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
=======
        <div key={`res_${index}`} className="box neutral2 padding text-center ">
            <h4 className="heavyText genericSecondaryHeader">{reservation.listing_name}</h4>
            <h4>{reservation.date_start}</h4>
            <h4>{reservation.date_end}</h4>
            <h4>${reservation.total}</h4>
            <button className="button-4" onClick={ handleDeleteReservation }>Cancel</button>
        </div>
      )
    })
  }
>>>>>>> a636b7d3d4b4cd7e2922ae9a3a5327ac8a95ef1c

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {renderReservations()}
    </Grid>
  );
}

export default ReservationDetails;
