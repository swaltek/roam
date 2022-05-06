import React from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

import {
  Center,
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
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
  const {
    isOpen: isOpenSignUpModal,
    onOpen: onOpenSignUpModal,
    onClose: onCloseSignUpModal,
  } = useDisclosure();

  // router params
  const navigate = useNavigate();

  // event handlers
  const handleSignUp = async (values) => {
    console.log(values);
    let signUpData = {
      ...values
    };
    const data = {};
    console.log("LOGIN INFO:", signUpData);

    // ??
    const user = {...values};
    console.log(user);
    props.setUsername(user.username);

    if (data) {
      navigate("/");
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

  return (
    <>
      <Button
        onClick={onOpenSignUpModal}
        size="sm"
        rounded="md"
        color={["primary.500", "primary.500", "white", "white"]}
        bg={["white", "white", "primary.500", "primary.500"]}
        _hover={{
          bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
        }}
      >
        Sign Up
      </Button>
      <Modal
        isCentered
        onClose={onCloseSignUpModal}
        isOpen={isOpenSignUpModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalCloseButton />
          <ModalBody>{renderForm()}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SignUp;
