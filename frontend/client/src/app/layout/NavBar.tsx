import { AppBar, Toolbar, Typography, IconButton, ListItem, List, Badge } from '@mui/material'
import { LightMode, DarkMode, ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]

type Props = {
  darkMode: boolean
  toggleTheme: () => void
}
export default function NavBar({ darkMode, toggleTheme }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography component={NavLink} to='/' variant="h6">Da Store</Typography>
        <IconButton onClick={() => toggleTheme()}>
          {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
        </IconButton>
        <List sx={{display:'flex'}}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: "inherit", typography: "h6" }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <IconButton size="large" sx={{color:'inherit'}}>
          <Badge>
            <ShoppingCart />
          </Badge>
        </IconButton>

        <List sx={{display:'flex'}}>
          {rightLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: "inherit", typography: "h6" }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}

