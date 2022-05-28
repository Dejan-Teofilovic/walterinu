import { grey } from "@mui/material/colors";

export const ROUTES = [
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'Tokenomics',
    path: '#tokenomics'
  },
  {
    name: 'Roadmap',
    path: '#roadmap'
  },
  {
    name: 'How to buy',
    path: 'how-to-buy'
  },
  {
    name: 'FAQ',
    path: '#faq'
  },
  {
    name: 'Announcements',
    path: '#announcement'
  }
];

//  Animations
export const VAR_FADE_IN_UP = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_DOWN = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_LEFT = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_RIGHT = {
  hidden: {
    x: 30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};

// Colors
export const COLOR_PRIMARY = '#60FF42';
export const COLOR_SECONDARY = grey[600];
export const COLOR_SUCCESS = '#4caf50';
export const COLOR_DARK = grey[900];
export const COLOR_BRIGHT = 'white';

export const FONT_PRIMARY = 'font-walter-turncoat';
export const FONT_SECONDARY = '';

export const COMMUNITY_TELEGRAM_URL = 'https://t.me/KingPacToken';