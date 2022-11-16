import { whiteColor, shadowColor } from "theme/color";
import {
  fontsize16,
  fontsize32,
  poppins500,
  poppins600,
} from "theme/common.style";

export const rowSpace = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
};

export const statusCard = () => ({
  // height: "187px",
  background: whiteColor,
  boxShadow: `0px 1px 8px ${shadowColor}`,
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  ".MuiGrid-root": {
    flexGrow: "1",
  },
});

export const dayDispContainer = {
  background: whiteColor,
  boxShadow: `0px 1px 8px ${shadowColor}`,
  borderRadius: "5px",
  width: "140px",
  height: "110px",
  alignItems: "center",
  justifyContent: "center",
};
export const dayTextFont = {
  ...poppins600,
  textAlign: "center",
  ...fontsize32,
};
export const dayTextBottom = {
  ...poppins500,
  ...fontsize16,
  textAlign: "center",
  color: "#666666 !important",
};
export const seperator = {
  ...poppins500,
  fontSize: "48px",
  display: "flex",
  alignItems: "center",
};
export const termsCondition = {
  border: "1px solid #AF05FF",
  borderRadius: "5px",
  ...poppins500,
  ...fontsize16,
  padding: "10px",
  textAlign: "center",
  color: "#555252",
};
