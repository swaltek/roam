import { useLocation } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import {
  VStack,
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  Spinner,
  Button,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
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
  const { isOpen, onToggle } = useDisclosure();
  const [listings, setListings] = useState(undefined);

  useEffect(() => {
    //if( listings ) return;
    //apiCalls.getListingsNearPoint(state.center, 50).then((data) => {
    //  setListings(data);
    //});
  });
  
  const populateListingsWithFeatures = async (map) => {
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
      <Button onClick={onToggle}>{ isOpen ? 'Hide Listings': 'Expand Listings'}</Button>
      <Box
        style={{
          position: 'relative',
        }}
      >
        <Map w="100%" h="80vh" loadListings origin={state.center}
        onMove={() => setListings(undefined) }
        onIdle={(_e, map) => populateListingsWithFeatures(map)}
        />
        <Slide
          direction='left'
          in={isOpen}
          style={{
            position: 'absolute',
            width: '30%',
            right: 0,
            zIndex: 10
          }}>
            <VStack
              p='40px'
              color='white'
              mt='4'
              bg={["primary.900", "primary.900", "primary.900", "primary.900"]}
              rounded='md'
              shadow='md'>
              { listings
                ?
                <span>
                  { listings.map((data) => {
                      return (<Listing key={data.id} data={data}/>)
                    }
                  )}
                </span>
                :
                  listings === undefined 
                  ?
                    <Spinner />
                  :
                  <h1> No listings in this area! </h1>
              }
          </VStack>
        </Slide>
      </Box>
      </div>
  );
}

export default ListingSearch;
