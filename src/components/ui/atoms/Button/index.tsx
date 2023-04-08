import { Button as ButtonBase } from "@mui/material";

const Button = ({
  onClick,
  component,
  children,
  href,
  color,
  variant = "contained",
  ...props
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  href?: string;
  component?: React.ElementType;
}) => {
  return (
    <ButtonBase
      onClick={onClick}
      {...props}
      href={href}
      variant={variant}
      color={color}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
