// pages/_error.tsx
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const ErrorWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;

const BackButton = styled(Button)`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.common.white};
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

const ErrorPage: NextPage = () => {
  const router = useRouter();

  return (
    <ErrorWrapper>
      <ErrorText variant="h1">404</ErrorText>
      <ErrorText variant="h4">Page Not Found</ErrorText>
      <BackButton onClick={() => router.push("/")}>Go Back to Home</BackButton>
    </ErrorWrapper>
  );
};

export default ErrorPage;
