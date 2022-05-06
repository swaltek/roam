import { Box, Image } from "@chakra-ui/react";

const HeaderImage = ({ imageUrl = "" }) => {
  return (
    <div className="header-image">
      <Box>
        <Image
          src={imageUrl}
          bgSize={"cover"}
          display={"flex"}
          position={"relative"}
          width="100%"
        />
      </Box>
    </div>
  );
};

export default HeaderImage;
