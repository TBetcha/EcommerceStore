import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import {LightMode, DarkMode} from '@mui/icons-material'

type Props = {
  darkMode: boolean
  toggleTheme: () => void
}
export default function NavBar({darkMode, toggleTheme}: Props) {
  // const darkMode = true;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Da Store</Typography>
        <IconButton onClick={() => toggleTheme(!darkMode)}>
          {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}} />}
        </IconButton>
      </Toolbar>

    </AppBar>
  )
}

