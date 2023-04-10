import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Meta from "~/components/layouts/Meta";
import Button from "~/components/ui/atoms/Button";
import { RouterLink } from "~/components/ui/atoms/RouterLink";
import { paths } from "~/components/utils/paths";

const ErrorPage: NextPage = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Meta title="Error: Page Not Found" />
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          py: "80px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Box
              alt="Not found"
              component="img"
              src="/assets/errors/error-404.png"
              sx={{
                height: "auto",
                maxWidth: "100%",
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" variant={mdUp ? "h1" : "h4"}>
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mt: 0.5 }}>
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Button component={RouterLink} href={paths.index}>
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ErrorPage;
