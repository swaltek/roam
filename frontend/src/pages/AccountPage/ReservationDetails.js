import apiCalls from "../../api/apiCalls"
import { useEffect, useState } from "react";

function ReservationDetails(){
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    loadReservations()
  }, [])

  const loadReservations = async () => {
    const data = await apiCalls.getAllReservations()
    setReservations(data ? data : [])
  }

  const removeReservation = (deleteReservationById) => {
    const updatedReservations = reservations.filter((reservation) => {
      return reservation.id !== deleteReservationById
    })
    setReservations(updatedReservations);
  }


  const renderReservations = () => {
    return reservations.map((reservation, index) => {

      const handleDeleteReservation = async () => {
        const data = await apiCalls.deleteReservationById(reservation.id)
        if (data) {
          removeReservation(reservation.id)
        }
        else {
          console.error("ERROR")
        }
      }

      return (
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
}

export default ReservationDetails;