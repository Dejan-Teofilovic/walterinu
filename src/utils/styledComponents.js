import { Button, Dialog, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR_DARK, COLOR_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_SUCCESS, FONT_PRIMARY } from './constants';

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

export const PrimaryOutlinedButton = styled(Button)({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  color: COLOR_LIGHT,
  borderRadius: 25,
  border: `2px solid ${COLOR_PRIMARY}`,
  textTransform: 'capitalize',
  fontFamily: FONT_PRIMARY,
  fontWeight: 700
});

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

export const PrimaryTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_PRIMARY};
`;

export const SecondaryTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_SECONDARY};
`;

export const SuccessTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_SUCCESS};
`;

export const DarkTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_DARK}
`;

export const BrightTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_LIGHT};
`;