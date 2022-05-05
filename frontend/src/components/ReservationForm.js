import { FormControl, FormLabel, FormErrorMessage, Button, Input, Textarea } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import apiCalls from '../api/apiCalls';
import * as yup from 'yup'
function ReservationForm(props) {

  const validationSchema = yup.object().shape({
    date_start:   yup.date()
                        .required('A Start Date is required'),
    date_end:     yup.date().required('A End Date is required')
                  
                        
});


  const initialValues = {
    date_start:  props.reservation ? props.reservation.date_start : '',
    date_end:    props.reservation ? props.reservation.date_end : '',
    total:       props.reservation ? props.reservation.total : '',
};

const onSubmit = async (values, {setSubmitting, resetForm})=> {
  console.log("Inside onSubmit")
  if (props.new){
    console.log('creating a new reservation API call')
    console.log(initialValues)
    let response = await apiCalls.createReservation(initialValues)
    if (response) {
      console.log(response)
      alert('new reservation created')
    }
  } else {
    console.log('updating API call')
    console.log(values)
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
                    isInvalid={touched.total && !!errors.total}
                >
                    <FormLabel>Total</FormLabel>
                    <Textarea 
                        name="total"
                        value={values.total}
                        placeholder="Your Total Cost" 
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
                    Submit
                </Button>
            </Form>
        )}
    </Formik>
   
  );
}
export default ReservationForm;