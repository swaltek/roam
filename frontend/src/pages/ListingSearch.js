import { useLocation } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import {
  HStack,
  Grid, GridItem,
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import apiCalls from '../api/apiCalls';
import Map from '../components/Map';

const  Listing = ({data}) => {
  return(
    <Box w="100%">
      <Heading fontSize='l'>{data.title}</Heading>
      <Text>{data.rating}</Text>
    </Box>
  );
}

const ListingSearch = () => {
  const { state } = useLocation();
  const [searchRadius, setSearchRadius ] = useState(50);
  const [listings, setListings] = useState(null);
  console.log(state);

  useEffect(() => {
    if(listings) return;
    apiCalls.getListingsNearPoint(state.center, searchRadius).then((data) => {
      console.log("data", data);
      setListings(data);
    });
  });

  return (
      <Grid
        templateColumns='repeat(6, 1fr)'
        gap={0}
      >
        <GridItem colSpan={5}>
          <Map w="100%" loadListings origin={state.center}/>
        </GridItem>
        <GridItem colSpan={1}>
          <Heading fontSize='xl'>Listing locations near{/* within {searchRadius} miles of */}{state.place_name}</Heading>
        <hr/>
        { listings && 
        <span>
            { listings.map((data) => {
              return (<Listing key={data.id} data={data}/>)
            }
            )}
        </span>
        }
        </GridItem>
      </Grid>
  );
}

export default ListingSearch;
