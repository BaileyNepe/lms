import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import styled, { useTheme } from "styled-components";
import { withAuthDashboard } from "~/components/HOC/withDashboardLayout";
import Button from "~/components/ui/atoms/Button";
import { RouterLink } from "~/components/ui/atoms/RouterLink";
import { paths } from "~/components/utils/paths";

const assessmentOptions = [
  // {
  //   title: "View User Results",
  //   description: "View detailed results and analytics for user assessments.",
  //   href: "/assessments/analytics",
  //   action: "View",
  // },
  {
    title: "Create an Assessment",
    description: "Create a new assessment for users to take.",
    href: paths.assessments.create,
    action: "Create",
  },
  {
    title: "View Assessments List",
    description: "View a list of all available assessments.",
    href: paths.assessments.list,
    action: "View",
  },
  // Add more navigation options here as needed
];

const CardContainer = styled(Card)`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100%;
  box-shadow: ${({ theme }) => theme.customShadows.z1};
`;

const CardAction = styled(RouterLink)`
  display: flex;
  justify-content: flex-end;

  .MuiButtonBase-root {
    white-space: nowrap;
    width: 100%;
    padding: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiButtonBase-root:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const AssessmentCard = styled(
  ({
    title,
    description,
    href,
    action,
    ...props
  }: {
    title: string;
    description: string;
    href: string;
    action: string;
  }) => (
    <Grid item xs={12} sm={6} {...props}>
      <CardContainer>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              mb: 3,
              mt: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ flexGrow: 1, marginBottom: "auto" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardAction href={href} passHref>
          <Button color="primary">{action}</Button>
        </CardAction>
      </CardContainer>
    </Grid>
  )
)``;

const PreContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: ${({ theme }) => theme.spacing(2)};
    text-align: left;
  }
`;

const Assessments = () => {
  return (
    <PreContainer>
      <Container>
        <Typography variant="h2" sx={{ mt: 4, mb: 6 }}>
          Assessments
        </Typography>
        <Grid container spacing={4}>
          {assessmentOptions.map((option, index) => (
            <AssessmentCard key={index} {...option} />
          ))}
        </Grid>
      </Container>
    </PreContainer>
  );
};
export default withAuthDashboard(Assessments);
