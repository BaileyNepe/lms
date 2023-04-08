import { FormEvent } from "react";
import styled from "styled-components";
import FormFields from "~/components/ui/molecules/FormFields";
import Button from "../../atoms/Button";
import { ConfigType } from "../FormFields/types";

export const Form = styled.form`
  display: grid;
  gap: 4rem;
  margin: 1rem 0 0.5rem;

  @media (min-width: 48rem) {
    button {
      width: min-content;
    }
  }
`;

const SimpleForm = ({
  config,
  handleCreate,
  handleChange,
  value,
  buttonLabel = "Submit",
}: {
  config: ConfigType;
  handleCreate: (event: FormEvent) => void;
  handleChange: (event: any) => void;
  value: { [key: string]: string | boolean | number | undefined };
  buttonLabel?: string;
}) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(e);
      }}
    >
      <FormFields config={config} handleChange={handleChange} value={value} />
      <Button type="submit" variant="contained">
        {buttonLabel}
      </Button>
    </Form>
  );
};

export default SimpleForm;
