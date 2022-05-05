import { Box, Image } from "@chakra-ui/react";

const HeaderImage = ({ imageUrl = "" }) => {
  return (
    <div className="header-image">
      <Box h={800}>
        <Image
          src={imageUrl}
          bgSize={"cover"}
          display={"flex"}
          position={"relative"}
          zIndex={-1}
          width="100%"
          mt={-200}
          
        />
      </Box>
    </div>
  );
};

export default HeaderImage;
