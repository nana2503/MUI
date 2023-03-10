import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import { styled } from "@mui/system";
import Badge from "@mui/material/Badge";
import * as React from "react";
import { Mail, Notifications } from "@mui/icons-material";
import { deepPurple, orange } from "@mui/material/colors";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box >
      <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Hello world
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }}></PetsIcon>
        <Search>
          <InputBase placeholder="Searching..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="secondary">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            value="BN"
            sx={{ bgcolor: deepPurple[200] }}
            variant="rounded"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30, bgcolor: orange[300] }}
            variant="square"
          />
          <Typography>Bùi Ngọc Na</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e=>setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{mt: 5}}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Log out</MenuItem>
      </Menu>
    </AppBar>
    </Box>
  );
};
