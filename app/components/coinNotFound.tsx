import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

export default function CoinNotFound() {
  return (
    <Card
      key="coinNotFound"
      sx={{
        minWidth: 275,
        my: 2,
        backgroundColor: 'lightpink',
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            padding: 2,
            textAlign: 'center',
          }}
          color="red"
        >
          Sem Resultados
        </Typography>
      </CardContent>
    </Card>
  );
}
