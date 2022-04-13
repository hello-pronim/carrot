import styled from "styled-components/macro";

const StepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundImage:
    ownerState.active || ownerState.completed
      ? "url(static/img/step_icon_active.png)"
      : "url(static/img/step_icon_inactive.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  width: ownerState.active ? 50 : 40,
  height: ownerState.active ? 50 : 40,
  borderRadius: "50%",
  zIndex: 1,
}));

export default StepIconRoot;
