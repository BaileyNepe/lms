import { useEffect, useRef, useState } from "react";

// material-ui
import { ClickAwayListener, Paper, Popper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// third-party

// project imports
import Transitions from "~/components/ui/molecules/Transitions";

// assets
import { IconBell } from "@tabler/icons";

// notification status options
const status = [
  {
    value: "all",
    label: "All Notification",
  },
  {
    value: "new",
    label: "New",
  },
  {
    value: "unread",
    label: "Unread",
  },
  {
    value: "other",
    label: "Other",
  },
];

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<any>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (
    event: React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent
  ) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined
  ) => {
    event?.target.value && setValue(event?.target.value);
  };

  return (
    <>
      <Popper
        placement={matchesXs ? "bottom" : "bottom-end"}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [matchesXs ? 5 : 0, 20],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions
              position={matchesXs ? "top" : "top-right"}
              in={open}
              {...TransitionProps}
            >
              <Paper>{open && <div>Coming</div>}</Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;
