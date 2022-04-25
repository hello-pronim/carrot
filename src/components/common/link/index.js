import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components/macro";

const StyledLink = styled(RouterLink)`
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.main};
  text-decoration: none;
  cursor: pointer;
`;
const Link = ({ color = "primary", children, ...props }) => (
  <StyledLink color={color} {...props}>
    {children}
  </StyledLink>
);

export default Link;
