import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css';
import 'react-calendar/dist/Calendar.css';

function CalendarPicker() {
  const [date, setDate] = useState(new Date());

  useEffect(()=>{
    console.log(date)
  },[date])

  return (
      <Calendar
        onChange={setDate}
        selectRange={true}
        value={date} 
        minDate={new Date()} 
        minDetail='year'
      />
  );
}

export default CalendarPicker;