import { useEffect, useMemo } from "react";

// material-ui
import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import { styled, useTheme, type Theme } from "@mui/material/styles";

// project imports
import { useDispatch, useSelector } from "~/components/store";
import { openDrawer } from "~/components/store/slices/menu";
import Sidebar from "~/components/ui/molecules/SidebarMenu";
import Header from "./Header";

// assets
// import { IconChevronRight } from '@tabler/icons';

interface MainStyleProps {
  theme: Theme;
  open: boolean;
}

const drawerWidth = 280;
// styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }: MainStyleProps) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shorter,
      }),
      [theme.breakpoints.up("md")]: {
        marginLeft: -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
        marginRight: "10px",
      },
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter,
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
      },
    }),
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(openDrawer(!matchDownMd));
  }, [dispatch, matchDownMd]);

  const header = useMemo(() => <Toolbar>{<Header />}</Toolbar>, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={2}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: drawerOpen ? theme.transitions.create("width") : "none",
        }}
      >
        {header}
      </AppBar>
      <Sidebar />

      <Main theme={theme} open={drawerOpen}>
        {children}
      </Main>
    </Box>
  );
};

export default DashboardLayout;
