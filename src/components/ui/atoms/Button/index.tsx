import { Button as ButtonBase } from "@mui/material";

const Button = ({
  onClick,
  component,
  children,
  href,
  ...props
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  href?: string;
  component?: React.ElementType;
}) => {
  return (
    <ButtonBase onClick={onClick} {...props}>
      {children}
    </ButtonBase>
  );
};

export default Button;
