import { useState, useEffect } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function ItemCount({initial, maxValue,changeHandler}) {
  const [count, setCount] = useState(initial);

  function onMinus() {
    if (count>initial){
      setCount(count-1)
    }
  }

  function onPlus() {
    if (count<maxValue) {
      setCount(count+1)
    }
  }

  useEffect(() => {

  })

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <Box
      component="form"
      noValidate
      autoComplete="off"
      style={{
        width: '100%',
        padding: "0em 1em"
      }}
      >
        <TextField
          type="number"
          id="filled-read-only-input"
          label="Cantidad"
          color="secondary"
          focused
          value={count}
          fullWidth
          onChange={()=>changeHandler(count)}
          InputProps={{
            readOnly: true,
          }}
          inputProps={{
            style: {
              textAlign: 'center',

            }
          }}
          />
      </Box>
      <ButtonGroup
      disableElevation
      variant="contained"
      fullWidth
      style={{
        padding: "0em 1em"
      }}

      >
        <Button
          onClick={onMinus}
          >
            -
        </Button>
        <Button
          color="secondary"
          onClick={onPlus}
        >
          +
        </Button>
      </ButtonGroup>
    </Container>
  )
}