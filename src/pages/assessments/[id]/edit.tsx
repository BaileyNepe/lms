import { Delete as DeleteIcon, Search } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tab,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState, type SyntheticEvent } from 'react';
import styled from 'styled-components';
import { withAuthDashboard } from '~/components/HOC/withDashboardLayout';
import ListActionItem from '~/components/ui/atoms/ListActionItem';
import Loader from '~/components/ui/atoms/Loader';
import { api } from '~/components/utils/api';

export const Display = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  min-height: calc(80vh - 6rem);
`;

export const Aside = styled.aside`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  height: auto;
`;

export const TitleBox = styled.div`
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  display: grid;
  gap: 0.5rem;
  grid-template-columns: auto min-content;
  padding: 0 1rem;

  button {
    font-weight: 700;
    height: max-content;
    margin: -0.5rem;
    padding: 0.2rem 0rem;
    width: max-content;
  }
`;

export const Title = styled.h1``;

export const MainTitleBox = styled.div`
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  display: grid;
  gap: 0.5rem;
  grid-template-columns: min-content auto min-content;
  justify-items: center;
  padding: 0 1rem;

  button {
    font-weight: 700;
    height: max-content;
    padding: 0.2rem 0rem;
    width: max-content;
  }
`;

export const Container = styled.div`
  .MuiTabPanel-root {
    padding: 1.5rem 0 0;
  }
`;

export const AddButton = styled.button``;

export const Main = styled.main`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  height: auto;
`;

const mocks = {
  topics: [
    {
      id: '1',
      name: 'Topic 1',
      questions: [
        {
          id: '1',
          text: 'Question 1',
          answers: [
            {
              id: '1',
              text: 'Answer 1',
              correct: true,
            },
            {
              id: '2',
              text: 'Answer 2',
              correct: false,
            },
            {
              id: '3',
              text: 'Answer 3',
              correct: false,
            },
          ],
        },
        {
          id: '2',
          text: 'Question 2',
          answers: [
            {
              id: '1',

              text: 'Answer 1',
              correct: true,
            },
            {
              id: '2',
              text: 'Answer 2',
              correct: false,
            },
            {
              id: '3',
              text: 'Answer 3',
              correct: false,
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Topic 2',
      questions: [
        {
          id: '1',
          text: 'Question 1',
          answers: [
            {
              id: '1',
              text: 'Answer 1',
              correct: true,
            },
            {
              id: '2',
              text: 'Answer 2',
              correct: false,
            },
            {
              id: '3',
              text: 'Answer 3',
              correct: false,
            },
          ],
        },
      ],
    },
  ],
};

const Edit = () => {
  const { id } = useRouter().query;

  const assessmentId = typeof id === 'string' ? id : '';

  const [pageIndex, setPageIndex] = useState('0');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const {
    data: questions,
    isLoading,
    isError,
  } = api.assessment.getQuestions.useQuery({
    assessmentId,
    page,
    perPage,
  });

  const handleTabChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string
  ) => setPageIndex(newValue);

  return (
    <TabContext value={pageIndex}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
          <Tab label="Questions" value="0" />
          <Tab label="Setup" value="1" />
          <Tab label="Certificates" value="2" />
          <Tab label="Settings" value="3" />
        </TabList>
      </Box>
      <Container>
        <TabPanel value="0">
          <Display>
            <Aside>
              <TitleBox>
                <Title>Topics</Title>
                <Button
                  variant="contained"
                  onClick={() => {
                    // navigate(`/assessments-topics/${id}`);
                  }}
                >
                  + Add
                </Button>
              </TitleBox>
              <List>
                {mocks.topics.map((topic) => (
                  <ListItem key={topic.id}>
                    <ListItemText primary={topic.name} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Aside>
            <Main>
              <MainTitleBox>
                <Search />
                <Title>Questions</Title>
                <Button
                  variant="contained"
                  onClick={() => {
                    // navigate(`/assessments-questions/${id}`);
                  }}
                >
                  + Add
                </Button>
              </MainTitleBox>
              {isLoading ? (
                <Loader />
              ) : isError ? (
                <div>error</div>
              ) : (
                <List>
                  {questions?.data?.map((question) => (
                    <ListActionItem
                      key={question.id}
                      //   displayText={convertHTMLtoText(question.questionText, {
                      //     wordwrap: 10,
                      //   })}
                      actions={[
                        {
                          action: () => {
                            // navigate(
                            //   `/assessments-questions/${id}/${question.id}`
                            // );
                          },
                          icon: <Search />,
                          description: 'View',
                        },
                        {
                          action: () => {
                            // navigate(
                            //   `/assessments-questions/${id}/${question.id}`
                            // );
                          },
                          icon: <Search />,
                          description: 'View',
                        },
                      ]}
                      displayText={''}
                    />
                  ))}
                </List>
              )}
            </Main>
          </Display>
        </TabPanel>
        <TabPanel value="1">Item Two</TabPanel>
        <TabPanel value="2">Item Three</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </Container>
    </TabContext>
  );
};

export default withAuthDashboard(Edit);
