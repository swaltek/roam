import { useState, useEffect } from 'react';
import apiCalls from "../api/apiCalls";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MostPopularSites = (props) => {
  const [popularSites, setPopularSites] = useState([])

  useEffect(()=>{
    loadPopularSites()
  },[])

  const loadPopularSites = async ()=>{
    let response = await apiCalls.getAllListings()
    if (response){
      let build = []
      for (let i=0; i<response.length; i++){
        build.push(
          <Link key={`link-${response[i].id}`} to={`/listing/${response[i].id}`}>
            <Box className='box neutral' key={`card-${response[i].id}`} p={5} shadow='md' borderWidth='.5px' borderRadius='3%'>
              <Heading fontSize='xl'>{response[i].title}</Heading>
              <Text mt={4}>{response[i].description}</Text>
            </Box>
          </Link>
        )
      }
      //console.log(build)
      setPopularSites(build)
    }
  }

  return (
    <div>
      <h1 className="pageHeader centerContent">Most Popular Camping Sites!</h1>
      <HStack spacing={8}>
        { popularSites }
      </HStack>
    </div>
  );
};
  
  export default MostPopularSites;