import React from 'react';
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Icon as MuiIcon,
  IconButton,
  Link
} from '@mui/material';
import { Icon } from '@iconify/react';
import { BrightTypography, DarkCard, SecondaryTypography } from '../../utils/styledComponents';
import Carousel from '../../components/Carousel';
import { COLOR_PRIMARY } from '../../utils/constants';

const TEAM_MEMBERS = [
  {
    name: 'Dennis',
    introduction: 'Dennis is just a nickname that stuck in the crypto scene, but his real name is William Best. With a degree in Agricultural Leadership from Texas A&M, he is very experienced in sales and marketing. He enjoys reading, writing and all things related to Personal Growth.',
    image: 'team_dennis.webp',
    twitterUrl: 'https://twitter.com/DennisOfTheBSC'
  },
  {
    name: 'Dixon',
    introduction: 'Dixon is one of the founders of UGI which is a huge crypto community in Indonesia. His leadership and loyalty to his people is quite admirable. He enjoys watching basketball and hockey, loves to travel and has a big heart for animals. ',
    image: 'team_dixon.webp',
    twitterUrl: 'https://twitter.com/dixonrendy'
  },
  {
    name: 'Jay',
    introduction: 'Jay Bright who is from Newcastle, Australia is one of our community leaders and amazing content creators. Jay has a degree in Music Production with tons of experience in Marketing and Social Media Management.',
    image: 'team_jay.webp',
    twitterUrl: 'https://twitter.com/AustraliaToken'
  },
  {
    name: 'Al',
    introduction: 'Alfred Schubert, a simple family man that loves ranching and fishing. Al has a degree in Kinesiology from Texas A&M Kingsville, and a doctoral degree in Physical Therapy from the University of Texas Health Science Center San Antonio.',
    image: 'team_al.webp',
    twitterUrl: 'https://twitter.com/AlfredSchubert3'
  },
  {
    name: 'Jahid',
    introduction: 'Jahid, the youngest member of the group, but the strongest work ethic. With great experience on Social Media, he is constantly getting incredible engagement on his Walter tweets to people such as Elon Musk.',
    image: 'team_jahid.webp',
    twitterUrl: 'https://twitter.com/_jahxd?s=20&t=TTbpVB4B7lUwtbvSDLwAcQ'
  },
  {
    name: 'Hafidu',
    introduction: 'Hafidu is another one of our Indonesian friends who creates most of our graphic content for advertising. He likes to try new things and always strives to be someone who can genuinely help others in need.',
    image: 'team_hafidu.webp',
    twitterUrl: 'https://twitter.com/muhamadhafidu'
  },
  {
    name: 'Marc',
    introduction: "Marc, even though he doesn't look it, is one of the oldest Walters. His trade by day is making & repairing furniture; also a self-proclaimed Momma's boy. He is a big time dog lover and a very clever meme maker. A true Walter.",
    image: 'team_marc.webp',
    twitterUrl: 'https://twitter.com/Marclovscrypto'
  },
  {
    name: 'Steveo',
    introduction: 'Steveo is an Operations Manager in the Manufacturing business going on 7 years and investing in crypto for 3. He is personally interested in broadening the horizon of Meme Culture and Blockchain Technology.',
    image: 'team_steveo.webp',
    twitterUrl: 'https://twitter.com/crypto_SteveO69'
  }
];

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, centerPadding: '0' }
    }
  ]
};

const CarouselItem = ({ dataItem }) => {
  return (
    <DarkCard sx={{ mx: 1, height: '99%', boxShadow: '5px 5px 5px black' }}>
      <CardMedia
        component="img"
        src={`/assets/images/${dataItem.image}`}
        alt={dataItem.name}
      />
      <CardContent>
        <BrightTypography fontSize={{ xs: 28, md: 36 }} textAlign="center">
          {dataItem.name}
        </BrightTypography>
        <Stack direction="row" justifyContent="center">
          <IconButton component={Link} href={dataItem.twitterUrl} target="_blank">
            <MuiIcon sx={{ color: COLOR_PRIMARY, fontSize: { md: 48 } }}>
              <Icon icon="ant-design:twitter-circle-filled" />
            </MuiIcon>
          </IconButton>
        </Stack>
        <SecondaryTypography fontSize={{ md: 18 }} textAlign="center">
          {dataItem.introduction}
        </SecondaryTypography>
      </CardContent>
    </DarkCard>
  );
};

export default function TeamSection() {
  return (
    <Box py={{ xs: 4, md: 12 }} id="team">
      <BrightTypography
        fontSize={{ xs: 36, md: 58 }}
        fontWeight={900}
        textAlign="center"
      >
        Meet the Team
      </BrightTypography>
      <Container maxWidth="xl" sx={{ mt: { xs: 4, md: 8 } }}> 
        <Carousel
          slideSettings={SLIDER_SETTINGS}
          carouselItemComponent={CarouselItem}
          data={TEAM_MEMBERS}
        />
      </Container>
    </Box>
  );
}