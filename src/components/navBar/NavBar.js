import { AppBar, Box, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from "react";
import Drawer from '@mui/material/Drawer'
import SideDrawer from '../sideDrawer/SideDrawer'
import logo from '../../assets/img/favicon-32x32.png'
import { localTheme } from "../../styles/localTheme"

export default function NavBar({children}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerWidth] = useState(180)
  const [pages, setPages] = useState([])
  const [categories,setCategories] = useState([])
  const [title] = useState('Bienvenido');

  useEffect(() => {
    setPages(['Home','Products','Contact']);
    setCategories(['Gin','Rum','Whiskey'])
  },[])

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }


  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`
          },
          ml: {
            sm: `${drawerWidth}px`
          }
        }}
        style={{
          backgroundColor: `${localTheme.colors.primary}`
        }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr:2, display: { sm: 'none'}
              }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" noWrap component="div"
                >                
                {title}
              </Typography>
          </Toolbar>
        </AppBar>
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="buttons"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <SideDrawer 
            logo={logo}
            pages={pages}
            categories={categories}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <SideDrawer 
            logo={logo}
            pages={pages}
            categories={categories}
          />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>  
    </Box>
  )
}