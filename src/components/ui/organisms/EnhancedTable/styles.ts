import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Header = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(14),
  textTransform: 'uppercase'
}));
