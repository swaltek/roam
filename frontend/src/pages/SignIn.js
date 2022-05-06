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

import PasswordInput from "../components/form/PasswordInput";

const SignIn = (props) => {
  // router params
  const navigate = useNavigate();

  // event handlers
  const handleSignIn = async (evt) => {
    evt.preventDefault();

    let signInData = {
      email: evt.target.elements["email"].value,
      password: evt.target.elements["password"].value,
    };
    const data = await apiCalls.login(signInData);

    if (data) {
      props.setUsername(data.username);
      navigate("/");
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
            Sign In
          </Heading>
          <br />
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Box>
                  <form onSubmit={handleSignIn} method="POST">
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input id="email" placeholder="Email" />
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <PasswordInput id="password"/>
                    </FormControl>
                    <Button mt={4} bg="primary.500" color="white" type="submit">
                      Sign In
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
export default SignIn;
