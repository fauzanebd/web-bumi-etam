import { connect, styled } from "frontity";
import Link from "../link";
import Navigation from "./new_nav";
import MobileMenu from "./menu";
import logo from "../images/logo_web_small.png";
import Container from 'react-bootstrap/Container';

const Header = ({ state }) => {
  return (
    <>
      <Navigation />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);


const Title = styled.h2`
  fonts-family: var(--header-family);
  {/* font-size: clamp(1.5rem, 1.5rem + 1vw, 3rem); */}
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5rem;
  margin: 0; 
  margin-right: 5rem;
`;


const Logo = styled.img`
  max-width: 10em;
  display: inline-block;
  border-radius: 12px;
  margin-right: .2rem;
  margin-left: .2rem;
  margin-bottom: .2rem;
  vertical-align: middle;
  horizontal-align: middle;
`;

// const Description = styled.h4`
//   margin: 0;
//   color: rgba(255, 255, 255, 0.7);
// `;
const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-start;
  border-bottom: none;
  :hover {
    border-bottom: none!important;
  }
`;