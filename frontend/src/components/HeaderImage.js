import { Box, Image } from "@chakra-ui/react";

const HeaderImage = ({ imageUrl = "" }) => {
  return (
<<<<<<< HEAD
    <div class="header-image">
=======
    <div className="header-image">
>>>>>>> origin
      <Box>
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
