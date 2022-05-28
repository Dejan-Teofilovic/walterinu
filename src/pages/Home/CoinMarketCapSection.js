import React from 'react';
import { Container } from "@mui/material";

export default function CoinMarketCapSection() {
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,binancecoin,walter-inu"
        currency="usd"
        background-color="#111111"
        locale="en"
        font-color="#ffffff"
        vce-ready=""
      ></coingecko-coin-price-marquee-widget>
    </Container>
  );
}