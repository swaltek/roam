import { FormControl, FormLabel, FormErrorMessage, Button, Input, Textarea } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import apiCalls from '../api/apiCalls';
import * as yup from 'yup'
function ReservationForm(props) {

  const validationSchema = yup.object().shape({
    date_start:   yup.date()
                    .required('A Start Date is required'),
    date_end:     yup.date()
                    .required('A End Date is required'),
    num_persons:  yup.number('Must be a number')
  });

  const initialValues = {
    date_start:  props.reservation ? props.reservation.date_start : '',
    date_end:    props.reservation ? props.reservation.date_end : '',
    num_persons: props.reservation ? props.reservation.num_persons : '',
  };

  const onSubmit = async (values, {setSubmitting, resetForm})=> {
    // this adds in the listing info and the total price based on number of days
    values['listing'] = props.listing.id
    let end = new Date(values.date_end)
    let start = new Date(values.date_start)
    values['total'] = props.listing.price * ((end-start)/(1000*60*60*24))
    
    let response = await apiCalls.createReservation(values)
    if (response) {
      alert('new reservation created')
    }
    setSubmitting(false);
    resetForm({initialValues:''})
  }

  return (
    <Formik validateOnBlur={true}
    validateOnChange={false} {...{initialValues, onSubmit, validationSchema }}>
        {({ handleSubmit, handleBlur, handleChange, values, errors, isSubmitting, touched }) => (
            <Form noValidate onSubmit={handleSubmit}>

                <FormControl 
                    isRequired 
                    isInvalid={touched.date_start && !!errors.date_start}
                >
                    <FormLabel>Start Date:</FormLabel>
                    <Input
                        name="date_start"
                        type="date"
                        value={values.date_start}
                        placeholder="Enter you Start Date" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.date_start}</FormErrorMessage>
                </FormControl>

                <FormControl 
                    isRequired
                    isInvalid={touched.date_end && !!errors.date_end}
                >
                    <FormLabel>End Date:</FormLabel>
                    <Input
                        name="date_end"
                        type="date"
                        value={values.date_end}
                        placeholder="Enter the End Date" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.date_end}</FormErrorMessage>
                </FormControl>
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
                    isLoading={props.isSubmitting}
                    type='submit'
                >
                    Book it!
                </Button>
            </Form>
        )}
    </Formik>
   
  );
}
export default ReservationForm;