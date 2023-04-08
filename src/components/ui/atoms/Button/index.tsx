import { Button as ButtonBase } from "@mui/material";
import styled from "styled-components";

const Button = ({
  onClick,
  component,
  children,
  href,
  color,
  type,
  variant = "contained",
  ...props
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
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
      type={type}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
