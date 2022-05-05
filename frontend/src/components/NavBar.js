import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import "../styles/NavBar.css"

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <AiOutlineClose /> : <FiMenu />}
    </Box>
  );
};

// USE THIS CODE TO CHANGE NAV ITEMS BASED ON LOGIN STATE
// const MenuItem = ({ children, isLast, isButton, to = "/", ...rest }) => {
//   return (
//     <Link to={to}>
//       <Text display="block" {...rest}>
//         {children}
//       </Text>
//     </Link>
//   );
// };

// const renderNavItems = (props) => {
//   if (props.userName === "") {
//     return (
//       <>
//         <SignIn />
//         <SignUp />
//       </>
//     );
//   }
//   return (
//     <>
//       <MenuItem to="/most-popular">Popular</MenuItem>
//       <MenuItem to="/listings">Listings</MenuItem>
//     </>
//   );
// };

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        m
      >
        {/* UNCOMMENT WHEN LOGIN STATE IS FINISHED */}
        {/* {renderNavItems()} */}

        {/* DELETE WHEN LOGIN STATE IS FINISHED */}
        <SignIn />
        <SignUp />

      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["primary.700", "primary.700", "primary.700", "primary.700"]}
      zIndex={9999}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
