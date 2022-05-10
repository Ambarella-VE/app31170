import { Divider, List, ListItem, Toolbar } from "@mui/material";
import CartWidget from "../cartWidget/CartWidget";

export default function SideDrawer({
  logo, 
  pages, 
  categories
}) {
  return (
    <div>
      <Toolbar>
        <img
          src={logo}
          alt='logo con A'
          />
      </Toolbar>
      <List>
        {
          pages.map((page, index) => {
            return (
              <ListItem button key={`${page}${index}`}>
                {page}
              </ListItem>
            )
          })
        }
      </List>
      <Divider />
      <List>
        {
          categories.map((category,index) => {
            return (
              <ListItem button key={`${category}${index}`}>
                {category}
              </ListItem>
            )
          })
        }
      </List>
      <Divider />
      <List>
        <ListItem button>
          <CartWidget quantity={11} />
        </ListItem>
      </List>
    </div>
  )
}