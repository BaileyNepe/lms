import { useEffect, useState } from "react";

// material-ui
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import useConfig from "~/utils/hooks/useConfig";
import NavItem from "../NavItem";

// assets
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavGroupProps, NavItemType } from "~/types/navItems";

const NavCollapse = ({
  menu,
  level,
}: {
  menu: NavGroupProps["item"];
  level: number;
}) => {
  const theme = useTheme();
  const { borderRadius } = useConfig();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!open ? menu.id : null);
  };

  const { pathname } = window.location;
  const checkOpenForParent = (child: any, id?: string) => {
    child.forEach((item: NavItemType) => {
      if (item.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };

  // menu collapse for sub-levels
  useEffect(() => {
    const children = menu.children ? menu.children : [];

    children.forEach((item) => {
      if (item.children?.length) {
        checkOpenForParent(item.children, menu.id);
      }
      if (item.url === pathname) {
        setOpen(true);
        setSelected(menu.id);
      }
    });
  }, [pathname, menu.children]);

  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case "item":
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon as React.ElementType;
  const menuIcon = menu.icon ? (
    <Icon
      strokeWidth={1.5}
      size="1.3rem"
      style={{ marginTop: "auto", marginBottom: "auto" }}
    />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `${borderRadius}px`,
          mb: 0.5,
          alignItems: "flex-start",
          backgroundColor: level > 1 ? "transparent !important" : "inherit",
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
        <ListItemIcon sx={{ my: "auto", minWidth: !menu.icon ? 18 : 36 }}>
          {menuIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant={selected === menu.id ? "h5" : "body1"}
              color="inherit"
              sx={{ my: "auto" }}
            >
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
                gutterBottom
              >
                {menu.caption}
              </Typography>
            )
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {open && (
          <List
            component="div"
            disablePadding
            sx={{
              position: "relative",
              "&:after": {
                content: "''",
                position: "absolute",
                left: "32px",
                top: 0,
                height: "100%",
                width: "1px",
                opacity: theme.palette.mode === "dark" ? 0.2 : 1,
                background:
                  theme.palette.mode === "dark"
                    ? theme.palette.dark.light
                    : theme.palette.primary.light,
              },
            }}
          >
            {menus}
          </List>
        )}
      </Collapse>
    </>
  );
};

export default NavCollapse;
