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

const SignUp = (props) => {
  // router params
  const navigate = useNavigate();

  // event handlers
  const handleSignUp = async (evt) => {
    evt.preventDefault();

    let signUpData = {
      email: evt.target.elements["email"].value,
      first_name: evt.target.elements["firstName"].value,
      last_name: evt.target.elements["lastName"].value,
      password: evt.target.elements["password"].value,
    };
    const data = await apiCalls.signup(signUpData);
    console.log("LOGIN INFO:", signUpData);

    if (data) {
      navigate("/signin");
    }
  };
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
                <Box>
                  <form onSubmit={handleSignUp} method="POST">
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input id="email" placeholder="Email" />
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input id="firstName" placeholder="First Name" />
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input id="lastName" placeholder="Last Name" />
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input id="password" placeholder="Password" />
                    </FormControl>
                    <Button mt={4} bg="primary.500" color="white" type="submit">
                      Create Account
                    </Button>
                  </form>
                </Box>
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
