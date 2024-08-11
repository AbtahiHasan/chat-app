import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  overflow: "hidden",
  border: 0,
  clip: "rect(0 0 0 0)",
  margin: -1,
  padding: 0,
  width: 1,
  height: 1,
  position: "absolute",
  whiteSpace: "nowrap",
});
