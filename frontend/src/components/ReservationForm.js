import { FormControl, FormLabel, FormErrorMessage, Button, Input, Textarea } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { useState } from 'react';
import apiCalls from '../api/apiCalls';
import * as yup from 'yup'
import CalendarPicker from './CalendarPicker';
import Calendar from 'react-calendar';
import '../styles/Calendar.css';
import 'react-calendar/dist/Calendar.css';

function ReservationForm(props) {
  const [date, setDate] = useState(new Date());

  const validationSchema = yup.object().shape({
    num_persons:  yup.number('Must be a number'),
  });

  const initialValues = {
    num_persons: props.reservation ? props.reservation.num_persons : ''
  };

  const onSubmit = async (values, {setSubmitting, resetForm})=> {
    // this adds in the listing info and the total price based on number of days
    values['listing'] = props.listing.id
    let end = new Date(values.date_end)
    let start = new Date(values.date_start)
    values['total'] = props.listing.price * ((end-start)/(1000*60*60*24))
    console.log(date)
    console.log(values)
    
    // let response = await apiCalls.createReservation(values)
    // if (response) {
    //   alert('new reservation created')
    // }
    // setSubmitting(false);
    // resetForm({initialValues:''})
  }

  return (
    <>
    <Calendar
        onChange={setDate}
        selectRange={true}
        value={date} 
        minDate={new Date()} 
        minDetail='year'
    />
    <Formik 
        validateOnBlur={true} 
        validateOnChange={false} 
        Calendar={Calendar}
        setDate={setDate}
        {...{initialValues, onSubmit, validationSchema }}
    >
    {({ handleSubmit, handleBlur, handleChange, values, errors, isSubmitting, touched }) => (
        <Form noValidate onSubmit={handleSubmit}>
            <FormControl 
                isInvalid={touched.num_persons && !!errors.num_persons}
            >
                <FormLabel>Number of visitors:</FormLabel>
                <Input 
                    name="num_persons"
                    value={values.num_persons}
                    placeholder="How many people will be staying" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </FormControl>
            <Button
                mt={4}
                colorScheme='teal'
                isLoading={isSubmitting}
                type='submit'
            >
                Book it!
            </Button>
        </Form>
    )}
    </Formik>
    </>
  );
}
export default ReservationForm;