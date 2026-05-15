import { useParams } from "react-router-dom"
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material"
import { useFetchProductDetailsQuery } from "./catalogApi"

export default function ProductDetails() {
  const { id } = useParams()

  const { data: product, isLoading } = useFetchProductDetailsQuery(id ? +id : 0)

  if (!product || isLoading) return <div>Loading...</div>

  const productDetails = [
    { label: 'Name', value: product.name },
    { label: 'Description', value: product.description },
    { label: 'Type', value: product.type },
    { label: 'Brand', value: product.brand },
    { label: 'Quantity In Stock', value: product.quantityInStock },
  ]

  return (
    // <Grid  container spacing={6} maxWidth='lg' sx={{mx: 'auto' }}>
    <Grid container spacing={6} sx={{ maxWidth: "lg", mx: "auto" }}>
      <Grid size={6}>
        <img
          src={product?.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{
            '& td': { fontSize: '1rem' }
          }}>
            <TableBody>
              {productDetails.map((x, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 'bold' }}>{x.label}</TableCell>
                  <TableCell >{x.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          <Grid size={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity in baskey"
              fullWidth
              defaultValue={1}
            />
          </Grid>
          <Grid size={6}>
            <Button sx={{ height: '55px' }} color="primary" size="large" variant="contained" fullWidth>
              Add To Basket
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

