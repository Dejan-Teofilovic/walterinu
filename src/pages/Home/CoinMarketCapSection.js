import React from 'react';
import { Container } from "@mui/material";

export default function CoinMarketCapSection() {
  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,binancecoin,walter-inu"
        currency="usd"
        background-color="#050505"
        locale="en"
        font-color="#ffffff"
        vce-ready=""
      ></coingecko-coin-price-marquee-widget>
    </Container>
  );
}