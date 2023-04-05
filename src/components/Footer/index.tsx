import {
  Box,
  Container,
  Grid,
  IconButton,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
import { footerLinks, socials } from "~/routes";

const StyledFooter = styled(Box)`
  ${({ theme }) =>
    `background: linear-gradient(135deg, ${theme.palette.primary.main} 55%, ${theme.palette.primary.dark} 5%);`}
  color: ${({ theme }) => theme.palette.common.white};
  padding: 1.5rem 0;
`;

const FooterLink = styled.div`
  color: inherit;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.white};
  display: block;
  margin-bottom: 0.5rem;
`;

const SocialIcon = styled(IconButton)`
  color: inherit;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.palette.common.white};
`;

const BoldTypography = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.white};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <BoldTypography variant="h6" gutterBottom>
              About Us
            </BoldTypography>
            <Typography>
              We are a company providing high-quality services to our customers.
              Our goal is to ensure customer satisfaction and build long-lasting
              relationships.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BoldTypography variant="h6" gutterBottom>
              Quick Links
            </BoldTypography>
            <Box>
              {footerLinks.map((link, index) => (
                <Link key={`${link}${index}`} href={link.href} passHref>
                  <FooterLink>
                    <Typography>{link.text}</Typography>
                  </FooterLink>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BoldTypography variant="h6" gutterBottom>
              Connect with Us
            </BoldTypography>
            <Box>
              {socials.map((social, index) => (
                <MuiLink
                  key={`${social}${index}`}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>
                    <social.icon />
                  </SocialIcon>
                </MuiLink>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
