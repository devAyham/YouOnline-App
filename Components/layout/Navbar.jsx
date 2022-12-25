import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styles from "styles/Components/navbar.module.scss";
import { ButtonGroup, Popover } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import country from "/public/Assets/Images/3.png";
import Image from "next/image";
import DrobDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [lang, setlang] = React.useState("En");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [location, setlocation] = React.useState('Location');

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <AppBar position="fixed" className={styles.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="div"
            noWrap
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <h3>YouOnline</h3>
          </Typography>
          <Box
            className={styles.menuList}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button className={styles.button} variant="contained">
              Add Post
            </Button>
            <Button className={styles.cartbutton} variant="text">
              Cart
            </Button>
            <Button className={styles.textbutton} variant="text">
              Sign In
            </Button>
            <DrobDownMenu location={location} setlocation={setlocation} />
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color={"inherit"}
              startIcon={
                location !='Location' && (
                  <Image src={country} alt={"dd"} placeholder={"blur"} />
                )
              }
            >
              {location}
            </Button>

            <ButtonGroup
              disableElevation
              variant="text"
              aria-label="Disabled elevation buttons"
              color={"success"}
            >
              <Button
                disabled={lang === "Ar"}
                className={styles.langbutton}
                onClick={() => {
                  setlang("Ar");
                }}
              >
                العربية
              </Button>
              <Button
                disabled={lang === "En"}
                className={styles.langbutton}
                onClick={() => {
                  setlang("En");
                }}
              >
                EN
              </Button>
            </ButtonGroup>
          </Box>
          {/* Small Screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={"page"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{"page"}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="img"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              my: 1,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <h4>YouOnline</h4>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
