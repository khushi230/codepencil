import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Container = styled(AppBar)`
  background: #060606;
  height: 60px;
`;

const Header = () => {
  return (
    <Box>
      <Container position="static">
        <Toolbar variant="dense">
          <BorderColorIcon /> Codepencil
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Header;
