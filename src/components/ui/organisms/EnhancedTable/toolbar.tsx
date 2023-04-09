// mui-imports
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
// project imports
import { EnhancedTableToolbarProps } from './types';

export const EnhancedTableToolbar = ({ tableTitle, create }: EnhancedTableToolbarProps) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        {tableTitle}
      </Typography>

      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      {create && (
        <Tooltip title={create.title}>
          <Button
            variant="contained"
            sx={{ whiteSpace: 'nowrap', margin: '0 1rem', padding: '0.2rem', fontWeight: '600' }}
            onClick={create.onClick}
          >
            {create.title}
          </Button>
        </Tooltip>
      )}
    </Toolbar>
  );
};
