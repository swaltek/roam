import "../styles/ListingForm.css";
import * as yup from 'yup'
import { Formik, Form } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Button, Input, Textarea } from '@chakra-ui/react'
import MapElement from "./SelectLocationMap";


function ListingForm(props) {
    const validationSchema = yup.object().shape({
        title:          yup.string()
                            .required('A site title required'),
        price:          yup.number('Must be a number')
                            .min(0, 'Cannot be a negative number'),
        description:    yup.string()
                            .required('Must give a description')
    });

    const initialValues = {
        title:          props.listing ? props.listing.title : '',
        price:          props.listing ? props.listing.price : '',
        description:    props.listing ? props.listing.description : '',
    };

    const onSubmit = async (values, { setSubmitting, resetForm })=> {
        values['is_boondock'] = props.is_boondock

        // this block sends a post request for a new listing object or a 
        // put request for updating a listing
        if (props.new){
            console.log('creating a new listing API call')
            console.log(values)
            // let response = await BarAPI.updateBeer(values, props.beer.id)
            // if (response) {
            //     navigate('/account')
            // }
        } else {
            console.log('updating a listing API call')
            console.log(values)
            // let response = await BarAPI.newBeer(values)
            // if (response) {
            //     navigate('/account')
            // }
        }
        setSubmitting(false);
        resetForm({values:''})
    }

    const mapOnChange = (event, newLngLat)=>{
        console.log(event)
        console.log(newLngLat)
    }

    return (
        <Formik validateOnBlur={true}
        validateOnChange={false} {...{initialValues, onSubmit, validationSchema }}>
            {({ handleSubmit, handleBlur, handleChange, values, errors, isSubmitting, touched }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <FormControl 
                        isRequired 
                        isInvalid={touched.title && !!errors.title}
                    >
                        <FormLabel>Title:</FormLabel>
                        <Input
                            name="title"
                            value={values.title}
                            placeholder="Enter a title for your site" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormErrorMessage>{errors.title}</FormErrorMessage>
                    </FormControl>
                    <FormControl 
                        isInvalid={touched.price && !!errors.price}
                    >
                        <FormLabel>Price:</FormLabel>
                        <Input
                            name="price"
                            value={values.price}
                            placeholder="Enter a price for your site" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormErrorMessage>{errors.price}</FormErrorMessage>
                    </FormControl>
                    <FormControl 
                        isRequired 
                        isInvalid={touched.description && !!errors.description}
                    >
                        <FormLabel>Description:</FormLabel>
                        <Textarea 
                            name="description"
                            value={values.description}
                            placeholder="Give your site a description" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormErrorMessage>{errors.description}</FormErrorMessage>
                    </FormControl>
                    <MapElement onChange={mapOnChange}/>
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

export default ListingForm;