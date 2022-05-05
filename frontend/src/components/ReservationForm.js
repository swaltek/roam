import { useState } from 'react';
import * as yup from 'yup'
import { Formik, Form } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Button, Input, Textarea } from '@chakra-ui/react'
import apiCalls from '../api/apiCalls';


function ReservationForm(props) {

    const validationSchema = yup.object().shape({
        date_start:     yup.date()
                            .required('A start date is required'),
        num_people:    yup.number()
                            .required('Must give a num_people')
                            .min(1, "Minimum 1 person for reservation")
    });

    const initialValues = {
        date_start:     props.reservation ? props.reservation.date_start : '',
        num_people:     props.reservation ? props.reservation.num_people : '',
    };

    const onSubmit = async (values, { setSubmitting, resetForm })=> {
        // this block sends a post request for a new listing object or a 
        // put request for updating a listing
        console.log('new reservation')
        console.log(values)
        //     let response = await apiCalls.createListing(values)
        //     if (response) {
        //         console.log(response)
        //         alert('new reservation created')
        //     }
        // } else {
        //     console.log('updating a listing API call')
        //     console.log(values)
            // let response = await BarAPI.newBeer(values)
            // if (response) {
            //     navigate('/account')
            // }
        // }
        setSubmitting(false);
        resetForm({values:''})
    }

    return (
        <Formik validateOnBlur={true}
        validateOnChange={false} {...{initialValues, onSubmit, validationSchema }}>
            {({ handleSubmit, handleBlur, handleChange, values, errors, isSubmitting, touched }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <FormControl 
                        isRequired 
                        isInvalid={touched.num_people && !!errors.num_people}
                    >
                        <FormLabel>num_people:</FormLabel>
                        <Input
                            name="num_people"
                            value={values.num_people}
                            placeholder="How many visitors" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormErrorMessage>{errors.num_people}</FormErrorMessage>
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={isSubmitting}
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