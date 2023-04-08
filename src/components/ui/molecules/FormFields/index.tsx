import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ConfigType } from "./types";

const FormFields = ({
  config,
  handleChange,
  value,
}: {
  config: ConfigType;
  handleChange: (event: any) => void;
  value: { [key: string]: string | boolean | number | undefined };
}) => {
  return (
    <>
      {config.fields.map((field, index) => {
        switch (field.type) {
          case "text":
            return (
              <FormControl key={index}>
                <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                <Input
                  aria-label={field.name}
                  name={field.name}
                  type="text"
                  id={field.name}
                  defaultValue={value[field.name]}
                  aria-describedby={field.name}
                  value={value[field.name]}
                  onChange={handleChange}
                />
                {field.helperText && (
                  <FormHelperText id={field.name}>
                    {field.helperText}
                  </FormHelperText>
                )}
              </FormControl>
            );
          case "select":
            if (!field.options)
              throw new Error("Select field must have options");
            return (
              <FormControl key={index}>
                <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                <Select
                  aria-label={field.name}
                  id={field.name}
                  name={field.name}
                  value={value[field.name]}
                  onChange={handleChange}
                  variant="standard"
                >
                  {field.options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {field.helperText && (
                  <FormHelperText id={field.name}>
                    {field.helperText}
                  </FormHelperText>
                )}
              </FormControl>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default FormFields;
