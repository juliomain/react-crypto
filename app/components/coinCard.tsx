import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia } from '@mui/material';

export interface ICoinData {
  id: string;
  name: string;
  year_established: number;
  country: string;
  image: string;
  trust_score: number;
  trade_volume_24h_btc: number;
}

interface ICoinDataView {
  coin: ICoinData;
}

export function CoinCard(props: ICoinDataView) {
  const { coin } = props;

  return (
    <Card
      key={coin.id}
      sx={{
        minWidth: 275,
        my: 2,
        backgroundColor: 'lightblue',
        alignContent: 'initial',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia component="img" sx={{ width: 60 }} image={coin.image} />
          <Typography
            sx={{ fontSize: 20, fontWeight: 700, padding: 2 }}
            color="text.secondary"
          >
            {coin.name}
          </Typography>
        </Box>
        <Box sx={{ padding: 1, marginTop: 2 }}>
          <Typography
            component="div"
            sx={{ fontSize: 14 }}
            color="text.secondary"
          >
            Ano de criação: <b>{coin.year_established}</b>
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: 14 }}
            color="text.secondary"
          >
            País: <b>{coin.country}</b>
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: 14 }}
            color="text.secondary"
          >
            Pontuação: <b>{coin.trust_score}</b>
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: 14 }}
            color="text.secondary"
          >
            Volume de trade (24hs): <b>{coin.trade_volume_24h_btc}</b>
          </Typography>
        </Box>
      </CardContent>
    </Card>
    // <Box
    //   key={coin.id}
    //   border="2px solid rgb(224, 224, 224)"
    //   padding="8px 8px"
    //   background-color="lightgrey"
    //   sx={{
    //     my: 2,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'left',
    //     alignItems: 'left',
    //     backgroundColor: 'lightblue',
    //     borderRadius: 4,
    //   }}
    // >
    //   <p>{coin.name}</p>
    //   <p>{coin.year_established}</p>
    //   <p>{coin.country}</p>
    //   <p>{coin.trust_score}</p>
    //   <p>{coin.trade_volume_24h_btc}</p>
    //   <p>{coin.image}</p>
    // </Box>
  );
}
