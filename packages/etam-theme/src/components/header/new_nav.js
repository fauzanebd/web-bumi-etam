import { connect, styled } from "frontity";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "../link";
import logo from "../images/kutai_logo_small.png";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
 
  return (
    
    <Navbar bg="white" expand="lg" sticky="top" variant="light" className="navbar-toggleable-md mediumnavigation">
      <Container>
        <Navbar.Brand href="/">
          <img src="https://cdn.discordapp.com/attachments/692746506079567962/1003396569174913045/Asset_1.png" />
          {/* {state.frontity.title} */}
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler-right" data-toggle="collapse" data-target="#navbarsWow" aria-controls="navbarsWow" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarsWow">
          <Nav className="ml-auto" >
            {items.map((item, link) => {
                const isCurrentPage = state.router.link === link;
                if ( "child_items" in item ) {
                  return (
                    
                    <NavDropdown key={item.ID} title={item.title} id="basic-nav-dropdown">
                      {item.child_items.map((childItem) => {
                        return (
                          <NavDropdown.Item key={childItem.ID}>
                            <Link link={childItem.url} className="nav-link" aria-current={isCurrentPage ? "page" : undefined}>
                              {childItem.title}</Link>
                          </NavDropdown.Item>
                        )
                      }
                      )}
                    </NavDropdown>
                  );
                } else {
                  return (
                  <li className="nav-item" key={item.ID}>
                    <Link link={item.url} className="nav-link" aria-current={isCurrentPage ? "page" : undefined}>
                      {item.title}
                    </Link>
                  </li>
                  );
                }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    // <NavContainer>
    //    {items.map((item, link) => {
    //      const isCurrentPage = state.router.link === link;
    //      return (
    //       <NavItem key={item.ID}>
    //          <Link link={item.url} aria-current={isCurrentPage ? "page" : undefined}>
    //            {item.title}</Link>
    //        </NavItem>
    //      );
    //    })}
    //  </NavContainer>
   );
 };

export default connect(Navigation);

// const NavContainer = styled.nav`
//   list-style: none;
//   display: flex;
//  /* width: 90vw;
//   width: clamp(16rem, 90vw, 58rem); 
//   width: var(--wide-container); */
//  /* width: 848px;*/
//   max-width: 100%; 
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
//   margin-right: 5rem;
//   overflow-x: auto;

//   @media screen and (max-width: 35rem) {
//     display: none;
//   }
// `;

// const NavItem = styled.div`
//   font-family: var(--body-family);
//   padding: 0;
//   margin: 0 16px;
//   color: black;
//   font-size: clamp(1.05rem, .9rem + 0.25vw, 1.25rem); 
//   box-sizing: border-box;
//   flex-shrink: 0;

//   & > a {
//     display: inline-block;
//     text-decoration: none;
//     color: black;
//     line-height: 2em;
//     font-weight: 400;
//     border-bottom: 2px solid;
//     border-bottom-color: transparent; 
//     /* Use for semantic approach to style the current link */
//     &[aria-current="page"] {
//       border-bottom-color: black!omportant;
//       font-weight:400;
//     }
//     &:hover,
//     &:focus {
//       border-bottom: 4px solid var(--color-link-darker);
//     }
//   }

//   &:first-of-type {
//     margin-left: 0;
//   }

//   &:last-of-type {
//     margin-right: 0;

//     &:after {
//       content: "";
//       display: inline-block;
//       width: 24px;
//     }
//   }
// `;
