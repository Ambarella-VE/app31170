import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.colors.background}`,
    padding: "0 4px",
    backgroundColor: `${theme.colors.primary}`,
    color: "#fff",
  }
}));
