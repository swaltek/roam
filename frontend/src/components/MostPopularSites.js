import { useState, useEffect } from 'react';
import apiCalls from "../api/apiCalls";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FavoriteButton from './FavoriteButton';

export const MostPopularSites = (props) => {
  const [popularSites, setPopularSites] = useState([])

  useEffect(()=>{
    loadPopularSites()
  },[props.user])

  const loadPopularSites = async ()=>{
    let response = await apiCalls.getListingsPopular()
    if (response){
      let build = []
      for (let i=0; i<response.length; i++){
        build.push(
          <Box className='box neutral' key={`card-${response[i].id}`} p={5} shadow='md' borderWidth='.5px' borderRadius='3%'>
            { props.user && <FavoriteButton user={props.user} setUser={props.setUser} listingId={response[i].id}/>}
            <Link key={`link-${response[i].id}`} to={`/listing/${response[i].id}`}>
              <Heading fontSize='xl'>
                {response[i].title}
              </Heading>
              <Text mt={4}>{response[i].description}</Text>
            </Link>
          </Box>
        )
      }
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