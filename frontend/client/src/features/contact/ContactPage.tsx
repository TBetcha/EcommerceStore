import { Typography, ButtonGroup, Button } from '@mui/material'
import { decrement, increment } from './counterReducer'
import { useAppDispatch, useAppSelector } from '../../app/store/store'


export default function ContactPage() {
  const {data} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <Typography variant='h2'>
        Contact page
      </Typography>
      <Typography variant='body1'>
        the data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color="error">Decrement</Button>
        <Button onClick={() => dispatch(increment(1))} color="secondary">Increment</Button>
        <Button onClick={() => dispatch(increment(5))} color="secondary">Incrementby 5</Button>
      </ButtonGroup>
    </>
  )
}

