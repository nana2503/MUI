import { Box } from "@mui/material";
import React from "react";
import { Posts } from "./Posts";

export const Feed = () => {
  return (
    <Box flex={4} p={1}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
};
