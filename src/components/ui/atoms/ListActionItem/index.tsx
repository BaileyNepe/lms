import { IconButton, Typography } from '@mui/material';

import styled from 'styled-components';
import MenuPopup from '../Menu';

interface ActionsItemProps {
  displayText: string;
  actions?: { action: () => void; icon: JSX.Element; description: string }[];
}

const Container = styled.li`
  display: flex;
  margin: 0.4rem 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

const ListActionItem = ({ displayText, actions }: ActionsItemProps) => {
  const actionList = actions?.map(({ action, icon, description }, index) => (
    <IconButton onClick={action} key={index}>
      {icon}
      <Typography key={description} variant="caption">
        {description}
      </Typography>
    </IconButton>
  ));
  return (
    <Container>
      <>
        <Typography>{displayText}</Typography>

        {actions?.length === 1 && { actionList }}
        {actions && actions?.length > 1 && <MenuPopup actions={actions} />}
      </>
    </Container>
  );
};

export default ListActionItem;
