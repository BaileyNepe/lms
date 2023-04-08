// material-ui
import { Avatar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import { useDispatch, useSelector } from "~/components/store";
import { openDrawer } from "~/components/store/slices/menu";
import LogoSection from "~/components/ui/atoms/LogoSection";
import MobileSection from "../MobileSection";
import NotificationSection from "../NotificationSection";
import ProfileSection from "../ProfileSection";

// assets
import { Close, Menu } from "@mui/icons-material";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);

  return (
    <>
      <Box
        sx={{
          width: 0,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        ></Box>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            overflow: "hidden",
            transition: "all .2s ease-in-out",
            background:
              theme.palette.mode === "dark"
                ? theme.palette.dark.main
                : theme.palette.secondary.light,
            color:
              theme.palette.mode === "dark"
                ? theme.palette.secondary.main
                : theme.palette.secondary.dark,
            "&:hover": {
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.main
                  : theme.palette.secondary.dark,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.light
                  : theme.palette.secondary.light,
            },
          }}
          onClick={() => dispatch(openDrawer(!drawerOpen))}
          color="inherit"
        >
          {!drawerOpen ? <Menu /> : <Close />}
        </Avatar>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <ProfileSection />

      {/* mobile header */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <MobileSection />
      </Box>
    </>
  );
};

export default Header;
