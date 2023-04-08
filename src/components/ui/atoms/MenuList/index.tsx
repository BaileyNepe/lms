import { memo } from "react";

// material-ui
import { Typography } from "@mui/material";

// project imports
import menuItem from "~/components/routes/menu-items";
import NavGroup from "~/components/ui/molecules/NavGroup";

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default memo(MenuList);
