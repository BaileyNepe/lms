import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
} from "react";

// material-ui
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports

import useConfig from "~/components/utils/hooks/useConfig";

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// types
import Link from "next/link";
import { dispatch, useDispatch, useSelector } from "~/components/store";
import { activeItem, openDrawer } from "~/components/store/slices/menu";
import { LinkTarget, NavItemType } from "~/types/navItems";

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: { item: NavItemType; level: number }) => {
  const theme = useTheme();
  const { pathname } = window.location;
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));

  const { borderRadius } = useConfig();
  const dispatch = useDispatch();
  const { selectedItem } = useSelector((state) => state.menu);

  const Icon = item.icon as React.ElementType;
  const itemIcon = item.icon ? (
    <Icon stroke={1.5} size="20px" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selectedItem.findIndex((id) => id === item.id) > -1 ? 8 : 6,
        height: selectedItem.findIndex((id) => id === item.id) > -1 ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  let itemTarget: LinkTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps: {
    component:
      | ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>>
      | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} href={item.url || "/"} target={itemTarget} />
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const itemHandler = (id: string) => {
    dispatch(activeItem([id]));
    matchesSM && dispatch(openDrawer(false));
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1 && item.id) {
      dispatch(activeItem([item.id]));
    }
  }, [pathname]);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `${borderRadius}px`,
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={selectedItem?.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id ?? "")}
    >
      <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant={
              selectedItem?.findIndex((id) => id === item.id) > -1
                ? "h5"
                : "body1"
            }
            color="inherit"
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
