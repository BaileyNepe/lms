import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Auth from "../Auth";

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Logo = styled(Typography)`
  flex-grow: 1;
`;

const NavigationLinks = styled(Box)`
  display: none;

  @media (min-width: 48rem) {
    display: flex;
    gap: 1rem;
  }
`;

const HamburgerMenuButton = styled(IconButton)`
  display: block;

  @media (min-width: 48rem) {
    display: none;
  }
`;

const Header = ({ links }: { links: { text: string; href: string }[] }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box role="presentation" sx={{ width: 250 }}>
      <List>
        {links.map((link, index) => (
          <Link key={`${index}${link}`} href={link.href} passHref>
            <ListItem>
              <ListItemText primary={link.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo variant="h6">Your Logo</Logo>
        <NavigationLinks>
          {links.map((link, index) => (
            <Link key={`${index}${link}`} href={link.href} passHref>
              <Button color="inherit">{link.text}</Button>
            </Link>
          ))}
          <Auth />
        </NavigationLinks>

        <HamburgerMenuButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </HamburgerMenuButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </StyledAppBar>
  );
};

export default Header;
