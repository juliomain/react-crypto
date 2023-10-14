import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import { CoinCard, ICoinData } from 'app/components/coinCard';
import CoinNotFound from 'app/components/coinNotFound';

export default function ExchangePage() {
  const router = useRouter();
  const { page } = router.query;

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [nextPage, setNextPage] = useState(1);

  const baseURL = `https://api.coingecko.com/api/v3/exchanges/?per_page=100&page=${page}`;
  //const baseURL = `http://localhost:3001/coins?_limit=100&_page=${page}`;

  // Obtém a referência do filtro
  const inputFilter = useRef<HTMLInputElement | null>();

  // Obtém os dados da página
  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(setData);
  }, [page]);

  // Efetua o filtro
  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((item: ICoinData) =>
          item.name.toLowerCase().includes(filterText.toLocaleLowerCase())
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, filterText]);

  // Executa a paginação
  useEffect(() => {
    setFilterText('');
    inputFilter.current!.value = '';
    router.push(`/exchange/${nextPage}`);
  }, [nextPage]);

  let body: any = filteredData.map((item: any) => (
    <CoinCard key={item.id} coin={item} />
  ));

  if (filteredData.length === 0) {
    body = <CoinNotFound />;
  }

  return (
    <Container maxWidth="lg">
      <Box>
        <Box
          sx={{
            minWidth: 275,
            my: 3,
            backgroundColor: '#bae8fa',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 900,
                padding: 2,
                textAlign: 'center',
              }}
              color="text.secondary"
            >
              React Crypto
            </Typography>
            <Box>
              <Box display="flex" alignItems="center" padding="8px 16px">
                <Button
                  id="Anterior"
                  disabled={parseInt(page?.toString()!) === 1}
                  variant="contained"
                  sx={{ textTransform: 'none' }}
                  onClick={() => setNextPage(nextPage - 1)}
                >
                  Página Anterior
                </Button>
                <Box flex="1" padding="8px 16px">
                  <TextField
                    id="Filtro"
                    inputRef={inputFilter}
                    variant="standard"
                    label="Filtro"
                    size="small"
                    defaultValue={filterText}
                    fullWidth={true}
                    onChange={(event: any) => setFilterText(event.target.value)}
                  />
                </Box>
                <Button
                  id="Proximo"
                  disabled={data.length < 100}
                  variant="contained"
                  sx={{ textTransform: 'none' }}
                  onClick={() => setNextPage(nextPage + 1)}
                >
                  Próxima Página
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {body}
    </Container>
  );
}
