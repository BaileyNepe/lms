import { useEffect, useRef, useState } from "react";

// material-ui
import {
  AppBar,
  Box,
  ClickAwayListener,
  IconButton,
  Paper,
  Popper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import Transitions from "~/components/ui/molecules/Transitions";

// assets
import MoreVertIcon from "@mui/icons-material/MoreVert";
// ==============================|| MOBILE HEADER ||============================== //

const MobileSection = () => {
  const theme = useTheme();
  const matchMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLDivElement | HTMLButtonElement | null>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) return;

    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Box component="span" ref={anchorRef} sx={{ mt: 1, ml: 1 }}>
        <IconButton
          sx={{
            color: theme.palette.mode === "dark" ? "primary.main" : "inherit",
            ml: 0.5,
            cursor: "pointer",
          }}
          onClick={handleToggle}
        >
          <MoreVertIcon
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
          />
        </IconButton>
      </Box>

      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ width: "100%", zIndex: 1 }}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, matchMobile ? 30 : 10],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions
              type="zoom"
              in={open}
              {...TransitionProps}
              sx={{ transformOrigin: "top right" }}
            >
              <Paper>
                {open && (
                  <AppBar
                    color="inherit"
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        background:
                          theme.palette.mode === "dark"
                            ? theme.palette.dark[800]
                            : "#fff",
                      },
                    }}
                  ></AppBar>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default MobileSection;
