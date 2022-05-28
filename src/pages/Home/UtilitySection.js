import React from 'react';
import { Container } from '@mui/material';
import { BrightTypography, SecondaryTypography } from '../../utils/styledComponents';

export default function UtilitySection() {
  return (
    <Container maxWidth="xl">
      <SecondaryTypography>Utility / Use Case</SecondaryTypography>
      <BrightTypography>Metaverse plan of invasion</BrightTypography>
      <SecondaryTypography>
        Walter Inu is powered by strong utility that will ensure this project reaches Moon
      </SecondaryTypography>
    </Container>
  );
}