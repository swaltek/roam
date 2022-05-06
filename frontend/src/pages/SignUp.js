import React from "react";
import { useNavigate } from "react-router-dom";
import apiCalls from "../api/apiCalls";

import {
  Center,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import {
  Formik,
  Form,
} from "formik";

import PasswordInput from "../components/form/PasswordInput";

const SignUp = (props) => {
  // router params
  const navigate = useNavigate();

  // event handlers
  const handleSignUp = async (values) => {
    console.log(values);
    let signUpData = {
      ...values
//       email: evt.target.elements["email"].value,
//       first_name: evt.target.elements["firstName"].value,
//       last_name: evt.target.elements["lastName"].value,
//       password: evt.target.elements["password"].value,
    };
    const data = await apiCalls.signup(signUpData);
    console.log("LOGIN INFO:", signUpData);

    // ??
    const user = {...values};
    console.log(user);
    props.setUsername(user.username);


    if (data) {
      navigate("/signin");
    }
  };

  const validate = (values) => {
    console.log("validating",values);
    const errors = {};
    if( values.password && values.verifypassword ){
      if ( values.verifypassword !== values.password ){
        errors.verifypassword = "Password does not match!"
      }
    }
    return errors;
  }

  const renderForm = () => {
    return (
      <Center>
        <div>
          <Heading
            fontWeight={600}
            fontSize={{ base: "xl", sm: "xl", md: "2xl" }}
            lineHeight={"110%"}
          >
            Sign Up
          </Heading>
          <br />
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                  <Formik
                    initialValues={{
                      email: '',
                      firstName: '',
                      lastName: '',
                      password: '',
                      verifypassword: '',
                    }}
                    onSubmit={handleSignUp}
                    validateOnChange={false}
                    validate={validate}>
                     {({ errors, values, handleChange}) => (
                      <Form>
                        <FormControl>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input 
                            name="email" 
                            placeholder="Email"
                            value={values.email} 
                            onChange={handleChange}
                          />
                          <FormLabel htmlFor="firstName">First Name</FormLabel>
                          <Input
                            name="firstName"
                            placeholder="First Name"
                            value={values.firstName} 
                            onChange={handleChange}
                          />
                          <FormLabel htmlFor="lastName">Last Name</FormLabel>
                          <Input
                            name="lastName"
                            placeholder="Last Name" 
                            value={values.lastName} 
                            onChange={handleChange}
                          />
                          {errors.password && <div>{errors.password}</div>}
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <PasswordInput
                            name="password"
                            value={values.password} 
                            onChange={handleChange}
                          />
                          <FormLabel htmlFor="verifypassword">Verify Password</FormLabel>
                          {errors.verifypassword && <div style={{'color': 'red'}}>{errors.verifypassword}</div>}
                          <Input
                            name="verifypassword"
                            type='password'
                            placeholder="Verify Password"
                            value={values.verifypassword} 
                            onChange={handleChange}
                          />
                        </FormControl>
                        <Button mt={4} bg="primary.500" color="white" type="submit">
                          Create Account
                        </Button>
                      </Form>
                     )}
                  </Formik>
              </Box>
            </Box>
          </Box>
        </div>
      </Center>
    );
  };

  return <>{renderForm()}</>;
};
export default SignUp;
