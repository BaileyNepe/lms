import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { withAuthDashboard } from "~/components/HOC/withDashboardLayout";
import { configSchema } from "~/components/ui/molecules/FormFields/types";
import SimpleForm from "~/components/ui/molecules/SimpleForm";
import { api } from "~/components/utils/api";
import { paths } from "~/components/utils/paths";

const Create = () => {
  const router = useRouter();

  const { data: quizTypes } = api.quizType.getAll.useQuery();
  const { mutate, error } = api.assessment.create.useMutation();

  const [value, setValue] = useState({ name: "", quizType: "" });

  const config = {
    title: "Create Assessment",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
      },
      {
        name: "quizType",
        label: "Type",
        type: "select",
        required: true,
        options:
          quizTypes?.map(({ id, label }) => ({ value: id, label })) ?? [],
      },
    ],
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = (e: any) => {
    const formData = new FormData(e.currentTarget);

    console.log(formData);

    mutate({ title: value.name, quizTypeId: value.quizType });

    if (error) {
      console.log(error.data?.zodError?.fieldErrors);
    }
    return;
    router.push(paths.assessments.index);
  };

  return (
    <div>
      <Typography variant="h2" sx={{ mt: 2, mb: 4, p: 2 }}>
        Create Assessment
      </Typography>
      <Container sx={{ width: "100%", maxWidth: "40rem", p: 2 }}>
        <SimpleForm
          config={configSchema.parse(config)}
          handleChange={handleChange}
          handleCreate={handleCreate}
          value={value}
          buttonLabel="Create"
        />
      </Container>
    </div>
  );
};

export default withAuthDashboard(Create);
