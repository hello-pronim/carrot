import styled from "styled-components/macro";

const StepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundImage:
    ownerState.active || ownerState.completed
      ? "url(static/img/carrot_thumb_rounded_primary.png)"
      : "url(static/img/carrot_thumb_rounded_secondary.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  width: ownerState.active ? 50 : 40,
  height: ownerState.active ? 50 : 40,
  borderRadius: "50%",
  zIndex: 1,
  cursor: (ownerState.active || ownerState.completed) && "pointer",
}));

export default StepIconRoot;
