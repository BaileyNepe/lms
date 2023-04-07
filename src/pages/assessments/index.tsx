import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import styled, { ThemeConsumer, useTheme } from "styled-components";
import { withAuthDashboard } from "~/components/HOC/withDashboardLayout";

const assessmentOptions = [
  {
    title: "View User Results",
    description: "View detailed results and analytics for user assessments.",
    href: "/assessments/analytics",
    action: "View",
  },
  {
    title: "Create an Assessment",
    description: "Create a new assessment for users to take.",
    href: "/assessments/create",
    action: "Create",
  },
  {
    title: "View Assessments List",
    description: "View a list of all available assessments.",
    href: "/assessments/list",
    action: "View",
  },
  // Add more navigation options here as needed
];

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
      <Card sx={{ height: "100%", boxShadow: useTheme().customShadows.z1 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ flexGrow: 1, marginBottom: "auto" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", marginTop: "auto" }}>
          <Link href={href} passHref>
            <Button variant="outlined" color="secondary">
              {action}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
)``;

const Assessments = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ mt: 4, mb: 6, textAlign: "center" }}>
        Assessments
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {assessmentOptions.map((option, index) => (
          <AssessmentCard key={index} {...option} />
        ))}
      </Grid>
    </Container>
  );
};
export default withAuthDashboard(Assessments);
