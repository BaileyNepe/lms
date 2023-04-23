import { TabContext, TabPanel } from '@mui/lab';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { withAuthDashboard } from '~/components/HOC/withDashboardLayout';
import { api } from '~/components/utils/api';
import { paths } from '~/components/utils/paths';

const AddQuestion = () => {
  const navigate = useRouter();
  const { id } = navigate.query;

  if (!id || Array.isArray(id)) {
    throw new Error('No assessment id');
  }

  const {
    data: questionTypes,
    // isLoading,
    // isError,
  } = api.question.getTypes.useQuery();

  const [pageIndex, setPageIndex] = useState('');
  const [questionType, setQuestionType] = useState('');

  const handleChangeQuestionPage = () => {
    if (!questionType) {
      return;
    }
    setPageIndex('1');
  };

  const handleSave = () => {
    // dispatch(
    //   saveTextEditors({
    //     questionType,
    //     assessment: id,
    //   })
    // );
    void navigate.push(paths.assessments.edit.index(id));
  };
  const [textEditors, setTextEditors] = useState([
    {
      id: 'answer 1',
      value: '',
    },
    {
      id: 'answer 2',
      value: '',
    },
  ]);

  return (
    <TabContext value={pageIndex}>
      <TabPanel value="">
        <FormControl>
          <FormLabel id="radio-buttons-group-label">
            Choose a question type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            {questionTypes?.map(({ id: questionTypeId, label }) => (
              <FormControlLabel
                key={questionTypeId}
                value={questionTypeId}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Button variant="contained" onClick={handleChangeQuestionPage}>
          Next
        </Button>
      </TabPanel>
      <TabPanel value="1">
        <div>Question Part</div>
        {/* <TextEditor id={'question'} height={300} /> */}
        <div>Answers</div>

        {textEditors.map((t) => (
          <div key={t.id}>
            <Typography variant="h6">{t.id}</Typography>
            {/* <TextEditor id={t.id} height={200} /> */}
            <FormControlLabel
              control={<Checkbox />}
              label="Correct Answer"
              //   onClick={() => dispatch(updateIsAnswer({ id: t.id }))}
            />
          </div>
        ))}
        <Button
          variant="contained"
          onClick={() =>
            setTextEditors((prev) => [
              ...prev,
              {
                id: `answer ${textEditors.length + 1}`,
                value: '',
              },
            ])
          }
        >
          Add Answer
        </Button>

        <Button variant="outlined" onClick={() => setPageIndex('')}>
          Back
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </TabPanel>
    </TabContext>
  );
};

export default withAuthDashboard(AddQuestion);
