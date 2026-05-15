import { AppBar, Toolbar, Typography, IconButton, ListItem, List, Badge, Box, LinearProgress } from '@mui/material'
import { LightMode, DarkMode, ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../store/store'

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: 'none',
  '&:hover': {
    color: 'gray.500'
  },
  '&.active': {
    color: '#baecf9'
  },

}

type Props = {
  darkMode: boolean
  toggleTheme: () => void
}
export default function NavBar({ darkMode, toggleTheme }: Props) {
  const { isLoading } = useAppSelector(state => state.ui)

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography component={NavLink} sx={navStyles} to='/' variant="h6">Da Store</Typography>
          <IconButton onClick={() => toggleTheme()}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
          </IconButton>

        </Box>
        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <IconButton size="large" sx={{ color: 'inherit' }}>
            <Badge>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

      </Toolbar>
      {isLoading && (
        <Box sx={{width:'100%'}}>
          <LinearProgress color='secondary' />
        </Box>
      )}
    </AppBar >
  );
}

