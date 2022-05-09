import { useLocation } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import {
  VStack,
  Grid, GridItem,
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import apiCalls from '../api/apiCalls';
import Map from '../components/Map';
//import Search from '../components/GeocodingSearch.js';

const  Listing = ({data}) => {
  return(
    <Box shadow='s' borderWidth='2px' borderRadius='md' >
      <Heading fontSize='l'>{data.title}</Heading>
      <Text mt={4}>{data.rating || "This site has no ratings!"}</Text>
    </Box>
  );
}

const ListingSearch = () => {
  let { state } = useLocation();
  //const [searchRadius, setSearchRadius ] = useState(100);
  const [listings, setListings] = useState(null);
  console.log('state', state);

  useEffect(() => {
    //if( listings ) return;
    //apiCalls.getListingsNearPoint(state.center, 50).then((data) => {
    //  setListings(data);
    //});
  });

  const handleMapMoveend = (_e, map) => {
    const features = map.queryRenderedFeatures({layers: ['unclustered-listing']});
    let viewingListings = [];
    for(const feature of features){
      viewingListings.push(feature.properties);
    }
    if (viewingListings.length >= 1){
      setListings(viewingListings);
    } else {
      setListings(null);
    }
  }

  return (
    <div>
      <Grid
        templateColumns='repeat(6, 1fr)'
        gap={0}
      >
        <GridItem colSpan={5}>
          <Map w="100%" loadListings origin={state.center} onMoveend={handleMapMoveend}/>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack>
            { listings
              ?
              <span>
                { listings.map((data) => {
                    return (<Listing key={data.id} data={data}/>)
                  }
                )}
              </span>
              :
              <span>
                <h1>No listings in this area!</h1>
              </span>
            }
          </VStack>
        </GridItem>
      </Grid>
      </div>
  );
}

export default ListingSearch;
