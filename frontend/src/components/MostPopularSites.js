import { useState, useEffect } from 'react';
import apiCalls from "../api/apiCalls";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";

export const MostPopularSites = (props) => {
  const [popularSites, setPopularSites] = useState([])

  useEffect(()=>{
    loadPopularSites()
  },[])

  const loadPopularSites = async ()=>{
    let response = await apiCalls.getAllListings()
    console.log(response)
    if (response){
      let build = []
      for (let i=0; i<response.length; i++){
        build.push(
          <Box key={`pop-${i}`} p={5} shadow='md' borderWidth='1px'>
            <Heading fontSize='xl'>{response[i].title}</Heading>
            <Text mt={4}>A great place to stay</Text>
          </Box>
        )
      }
      console.log(build)
      setPopularSites(build)
    }
  }

  return (
    <div>
      <h1>Most Popular Camping Sites!</h1>
      <HStack spacing={8}>
        { popularSites }
      </HStack>
    </div>
  );
};
  
  export default MostPopularSites;