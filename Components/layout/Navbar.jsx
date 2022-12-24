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
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { red } from "@mui/material/colors";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [alignment, setAlignment] = React.useState('web');

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
              <Button color={'secondary'} variant="contained">Add Post</Button>

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
