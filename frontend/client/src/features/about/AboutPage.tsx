import { Container, Typography, ButtonGroup, Button } from "@mui/material";
export default function AboutPage() {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h3' gutterBottom>Errors for testing</Typography>
      <ButtonGroup fullWidth>
        <Button variant="contained">Test 400 Error</Button>
      </ButtonGroup>
    </Container>
  )
}

