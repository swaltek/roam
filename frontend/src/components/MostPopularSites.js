import { useState, useEffect } from "react";
import apiCalls from "../api/apiCalls";
import { HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import defaultImage from "../static/branding/listing-default-image.png";

export const MostPopularSites = (props) => {
  const [popularSites, setPopularSites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPopularSites();
  }, [props.user]);

  const loadPopularSites = async () => {
    let data = await apiCalls.getListingsPopular();
    console.log(data);
    setPopularSites(data ? data : []);
  };

  const renderPopularSites = () => {
    return popularSites.map((site) => {
      return (
        <ListingCard
          listingId={site.id}
          user={props.user}
          setUser={props.setUser}
          imageUrl={defaultImage}
          key={site.id}
          name={site.title}
          is_boondock={site.is_boondock}
          nearPark={site.near_park}
          price={site.price}
          buttonText="Book Now"
          buttonClick={() => navigate(`/listing/${site.id}`)}
        />
      );
    });
  };

  return (
    <div>
      <h1 className="pageHeader centerContent">Most Popular</h1>
      <HStack pt={10} pb={10} spacing={8}>
        {renderPopularSites()}
      </HStack>
    </div>
  );
};

export default MostPopularSites;
