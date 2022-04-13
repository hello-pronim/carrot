import styled from "styled-components/macro";

const StepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundImage: ownerState.active
    ? "url(static/img/step_icon_active.png)"
    : ownerState.completed
    ? "url(static/img/step_icon_inactive.png)"
    : "url(static/img/step_icon_disabled.png)",
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
