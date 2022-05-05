import { ShoppingBasketRounded } from "@mui/icons-material";
import { StyledBadge } from "../../styles/styledBadge";
import { localTheme } from "../../styles/localTheme";

export default function CartWidget({ quantity }) {
  return (
    <StyledBadge theme={localTheme} badgeContent={quantity} max={10}>
      <ShoppingBasketRounded />
    </StyledBadge>
  );
}

