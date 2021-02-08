import { Box } from "grommet";
import React, { FC } from "react";

export const Landing: FC = () => {
  return (
    <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
      <Box flex align="center" justify="center">
        Content
      </Box>
    </Box>
  );
};
