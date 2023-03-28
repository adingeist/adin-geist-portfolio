import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { HEADER_HEIGHT } from './Header';

export const HeaderButton = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: 0,
  height: HEADER_HEIGHT,

  backgroundColor: theme.palette.background.default,
  ':hover': { backgroundColor: theme.palette.primary.light },
}));
