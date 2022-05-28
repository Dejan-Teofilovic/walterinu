import React from 'react';
import { Container, Grid } from "@mui/material";

export default function HeroSection() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  )
}