import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Email, Phone, Telegram } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { COLOR_PRIMARY, VAR_FADE_IN_UP, VAR_FADE_IN_DOWN } from '../utils/constants';
import MotionDiv from './MotionDiv';

export default function Footer() {
  return (
    <Box bgcolor="#111111" py={6} position="relative">
      {/* Ribbon */}
      <Box position="absolute" top={{ xs: -15, md: -25 }} left={{ xs: 50, md: 100 }}>
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Stack direction="row" alignItems="start">
            <Box
              sx={{
                borderBottom: { xs: '13px solid #76610a', md: '25px solid #76610a' },
                borderLeft: { xs: '10px solid transparent', md: '20px solid transparent' }
              }}
            />
            <Box width={{ xs: 100, md: 200 }} height={{ xs: 30, md: 50 }} bgcolor={COLOR_PRIMARY}>
              <Stack direction="row" justifyContent="center" alignItems="center" height="inherit">
                {/* Ribbon text here */}
                <Typography>Ribbon</Typography>
              </Stack>
            </Box>
          </Stack>
        </MotionDiv>
      </Box>
      <Container maxWidth="xl" sx={{ pt: { xs: 3, md: 6 } }}>
        <Grid container spacing={{ xs: 3, md: 0 }}>
          <Grid item xs={12} md={6}>
            <MotionDiv variants={VAR_FADE_IN_UP}>
              <Typography
                fontSize={{ xs: 24, md: 32 }}
                color={COLOR_PRIMARY}
                textAlign={{ xs: 'center', md: 'left' }}
              >Contact Us</Typography>
            </MotionDiv>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
              <MotionDiv variants={VAR_FADE_IN_DOWN}>
                <List>
                  <ListItem>
                    <ListItemIcon><Phone sx={{ color: grey[300] }} /></ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ color: grey[300] }}>
                        +1234567890
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Email sx={{ color: grey[300] }} /></ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ color: grey[300] }}>
                        admin@tech.com
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Telegram sx={{ color: grey[300] }} /></ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ color: grey[300] }}>
                        @KingPacToken
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </MotionDiv>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}