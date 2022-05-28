import { Button, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR_PRIMARY, FONT_PRIMARY } from './constants';

export const PrimaryButton = styled(Button)`
  background-color: ${COLOR_PRIMARY};
  color: black;
  border-radius: 25px;
  text-transform: capitalize;
  font-family: ${FONT_PRIMARY};
  font-weight: 700;
  :hover {
    background-color: ${COLOR_PRIMARY};
  } 
`;

export const CustomDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 25,
    bgColor: COLOR_PRIMARY
  }
});

export const TextButton = styled(Button)`
  text-transform: capitalize;
  font-family: ${FONT_PRIMARY};
`;