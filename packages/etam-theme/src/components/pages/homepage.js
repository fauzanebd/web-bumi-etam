import { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "../link";
import List from "../list";
import FeaturedMedia from "../featured-media";
import ReactHtmlParser from "react-html-parser";
// import { Carousel } from "antd";

import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

/**
 * The Page component that Mars uses to render any kind of "page type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which page type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Page when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Page} element rendered.
 */
const HomePage = ({ state, actions, libraries }) => {

  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the page.
  const page = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the page has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  // Load the page, but only if the data is ready.
  if (data.isReady) {
    const html = page.content.rendered;
    const parsed = ReactHtmlParser(html);
    // find carousel data
    const carousel = parsed.find(node => node.type === "div" && node.props.className === "carousel_content");
    const carousel_data = carousel.props.children;
    // console.log(carousel_data);

    // find featured data
    const featured = parsed.find(node => node.type === "div" && node.props.className === "featured_content");
    const featured_data = featured.props.children;
    // console.log(featured_data);

    // find recent posts data
    const recent = parsed.find(node => node.type === "div" && node.props.className === "recent_content");
    const recent_data = recent.props.children;
    console.log(recent_data);
  
    
    // call function to create carousel
    // const Carousel = createCarousel(carousel.props.children);
    return (
      
      <MainContainer>
        <StyledCarousel>
          {carousel_data.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                
                  <Link link={item.props.children[0].props.href}>
                    <img
                      width={900} height={500}
                      className="d-block w-100"
                      src={item.props.children[0].props.children[0].props.src}
                      alt={item.props.children[0].props.children[0].props.alt}
                    />
                    
                    <Carousel.Caption>
                      <h3>{item.props.children[2].props.children[0]}</h3>
                      <p>{item.props.children[10].props.children[0]}</p>
                    </Carousel.Caption>
                  </Link>
                
              </Carousel.Item>
            );
          })}
        </StyledCarousel>
        <Container>
          <MainContent className="main-content">
            <section className="featured-posts">
              <SectionTitle className="section-title">
                <h2><span>Featured Posts</span></h2>
              </SectionTitle>
              <Container>
                <CardGroup className="gap-0">
                  {featured_data.map((item, index) => {
                    var img_src=""
                    var title=""
                    var content=""
                    var author=""
                    var date=""
                    var link=""
                    try{
                      img_src = item.props.children[0].props.children[0].props.src;
                      title = item.props.children[2].props.children[0];
                      content = item.props.children[10].props.children[0];
                      author = item.props.children[6].props.children[0];
                      date = item.props.children[4].props.children[0];
                      link = item.props.children[0].props.href;
                    }catch(e){
                      img_src="https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg";
                      title = item.props.children[0].props.children[0];
                      content = item.props.children[8].props.children[0];
                      author = item.props.children[4].props.children[0];
                      date = item.props.children[2].props.children[0];
                      link = item.props.children[0].props.href;
                    }
                    return(
                      <StyledCard key={index}>
                        <Link link={link}>
                          <Card.Img variant="top" src={img_src} />
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{content}</Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">
                              {author} at {date}
                            </small>
                          </Card.Footer>
                        </Link>
                      </StyledCard>
                    );
                  })}
                </CardGroup>
              </Container>
            </section>
            <Container>
              <CustomRow md={1} lg={2} className="g-0 recent-posts">
                <Col sm={8} md={8} lg={8} className="g-0">
                <section className="recent-posts">
                  <SectionTitle className="section-title">
                    <h2><span>Semua Pos</span></h2>
                  </SectionTitle>
                  <Container>
                    <CustomRow xs={1} md={2} lg={2} className="g-0 masonrygrid">
                      {recent_data.map((item, index) => {
                        var img_src=""
                        var title=""
                        var content=""
                        var author=""
                        var date=""
                        var link=""
                        try{
                          img_src = item.props.children[0].props.children[0].props.src;
                          title = item.props.children[2].props.children[0];
                          content = item.props.children[10].props.children[0];
                          author = item.props.children[6].props.children[0];
                          date = item.props.children[4].props.children[0];
                          link = item.props.children[0].props.href;
                        }catch(e){
                          img_src="https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg";
                          title = item.props.children[0].props.children[0];
                          content = item.props.children[8].props.children[0];
                          author = item.props.children[4].props.children[0];
                          date = item.props.children[2].props.children[0];
                          link = item.props.children[0].props.href;
                        }
                        return(
                          <Col className="grid-item" key={index}>
                            <StyledCard>
                              <Link link={link}>
                                <Card.Img variant="top" src={
                                  img_src
                                } />
                                <Card.Body>
                                  <Card.Title>{title}</Card.Title>
                                  <Card.Text>
                                    {content}
                                  </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                  <small className="text-muted">
                                    {author} at {date}
                                  </small>
                                </Card.Footer>
                              </Link>
                            </StyledCard>
                          </Col>
                        );
                      })}
                    </CustomRow>
                    <Row md={1} lg={1} sm={1}>
                      <Col sm={1} md={1} lg={1} />
                      <Col sm={8} md={8} lg={8}>
                      <MorePostsButtonContainer>
                        <StyledLink link="https://www.bumietam.web.id/archives/" css={css`color: #fff`}>
                          <ExpandedButton>
                            Lihat semua pos
                          </ExpandedButton>
                        </StyledLink>
                      </MorePostsButtonContainer>
                      </Col>
                      <Col sm={1} md={1} lg={1} />
                    </Row>
                  </Container>
                </section>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <SideBarContainer>
                    <Row>
                      <div className="sidebar">
                        <div className="sidebar-section">
                          <h5><span>Peta Desa</span></h5>
                          <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free">
                            <img src="https://easydigitaldownloads.com/wp-content/uploads/2015/02/300x250-2.png" alt="Sell digital downloads with WordPress, for free"/>
                          </a>
                        </div>
                        <div className="sidebar-section">
                          <h5><span>Iklan</span></h5>
                          <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free">
                            <img src="https://easydigitaldownloads.com/wp-content/uploads/2015/02/300x250-2.png" alt="Sell digital downloads with WordPress, for free"/>
                          </a>
                        </div>
                        <div className="sidebar-section">
                          <h5><span>Profil Desa</span></h5>
                          <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free">
                            <img src="https://easydigitaldownloads.com/wp-content/uploads/2015/02/300x250-2.png" alt="Sell digital downloads with WordPress, for free"/>
                          </a>
                        </div>
                      </div>
                    </Row>
                  </SideBarContainer>
                </Col>
              </CustomRow>
            </Container>
          </MainContent>
        </Container>
      </MainContainer>
    )
  } else {
    return null;
  }
  // return data.isReady ? (

  //   <Content>
  //       <Html2React html={page.content.rendered} />
  //   </Content> 
  // ) : null;
};


export default connect(HomePage);

// // function to create carousel
// function createCarousel(carousel) {
//     return (
      
//     );
// }

const StyledLink = styled(Link)`
  color: #fff;
  width: 90% !important;
  border: none;
  text-align: center !important;
  display: block;
`

const ExpandedButton = styled(Button)`
  width: 90% !important;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0;
  margin-right: 0;
  padding: 1rem;
  border: none;
  text-align: center !important;
  display: block;
`

const MorePostsButtonContainer = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: center;
`


const SideBarContainer = styled(Container)`
  display: flex;
  justify-content: center;
`

const CustomRow = styled(Row)`
  margin: 0px;
`

const StyledCard = styled(Card)`
  border-radius: 15px;
  padding: 10px;

  .card-img-top {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  
  .card-footer {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`

const MainContainer = styled.div`
`;

const MainContent = styled.div`
`
const SectionTitle = styled.div`
  padding: 0px 20px 0px 20px;
`


const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;


const StyledCarousel = styled(Carousel)`
  @media (min-width: 900px) {
    padding-bottom: 20px;
    .carousel-inner .carousel-item {
      width:100%; 
      height: 500px !important;
    }

  }
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);

  .css-1rqesuu-Title {
    display: none;
  }

  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
