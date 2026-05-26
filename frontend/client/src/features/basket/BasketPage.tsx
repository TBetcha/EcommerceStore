import { Grid, Typography } from "@mui/material"
import { useFetchBasketQuery } from "./basketApi"
import BasketItem from "./BasketItem"
import Ordersummary from "../../app/shared/components/OrderSummary"

export default function BasketPage() {
  const { data, isLoading } = useFetchBasketQuery()

  if (isLoading) return <Typography>Loading basket...</Typography>
  if (!data) return <Typography variant="h3">Your basket is empty</Typography>
  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        {data.items.map(x => (
          <BasketItem item={x} key={x.productId} />
        ))}
      </Grid>
      <Grid size={4}>
        <Ordersummary />

      </Grid>
    </Grid>
  )
}

