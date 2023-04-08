import { Button as ButtonBase } from "@mui/material";

const Button = ({
  onClick,
  component,
  children,
  href,
  variant = "contained",
  ...props
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  href?: string;
  component?: React.ElementType;
}) => {
  return (
    <ButtonBase onClick={onClick} {...props} href={href} variant={variant}>
      {children}
    </ButtonBase>
  );
};

export default Button;
