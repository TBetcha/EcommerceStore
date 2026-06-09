import { Box, Paper, Typography } from "@mui/material"
import { useFetchFiltersQuery } from "./catalogApi"
import Search from "./Search"
import { useAppSelector, useAppDispatch } from "../../app/store/store"
import RadioButtonGroup from "../../app/shared/components/RadioButtonGroup"
import { setBrands, setOrderBy, setTypes } from "./catalogSlice"
import CheckboxButtons from "../../app/shared/components/CheckboxButtons"

const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'priceDesc', label: 'Price: High to low' },
  { value: 'PriceInc', label: 'Price: Low to high' }
]

export default function Filters() {
  const { data } = useFetchFiltersQuery()
  const { orderBy, types, brands } = useAppSelector(state => state.catalog)
  const dispatch = useAppDispatch()

  if (!data?.brands || !data.types) return <Typography variant='h3'>Loading...</Typography>

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={e => dispatch(setOrderBy(e.target.value))}
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          items={data.brands}
          checked={brands}
          onChange={(items: string[]) => dispatch(setBrands(items))}
        />

      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          items={data.types}
          checked={types}
          onChange={(items: string[]) => dispatch(setTypes(items))}
        />
      </Paper>
      {/* <Paper sx={{ p: 3 }}> */}
      {/*   <FormGroup> */}
      {/*     {data && data.types.map(item => ( */}
      {/*       <FormControlLabel */}
      {/*         key={item} */}
      {/*         control={<Checkbox color='secondary' sx={{ py: 0.7, fontSize: 40 }} />} */}
      {/*         label={item} */}
      {/*       /> */}
      {/*     ))} */}
      {/*   </FormGroup> */}
      {/* </Paper> */}
    </Box>
  )
}

