import { connect, styled, decode, css } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Container from "react-bootstrap/Container";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  return (
    <MainContainer>
      <HeaderIntro>
      {/* <BlackOverlay></BlackOverlay> */}
        {/* <div className="wrapintro">
          <h1>Daftar Postingan</h1>
          <h2 className="lead">"Affiliates" is a free Bootstrap Template designed & developed by WowThemesNet, best suitable for affiliate marketers.</h2>
        </div> */}
        <div className="jumbotron jumbotron-fluid">
          <Container>

            <h1 css={css`color: #fff`}>Daftar Postingan</h1>
            {/* <p class="lead" css={css`color: #fff`}> </p> */}
          </Container>
        </div>
      </HeaderIntro>
      <Container>
        <MainContent>
          {/* If the list is for a specific author, we render a title. */}
          {data.isAuthor ? (
              <Header>
                Author Archives:{" "}
                <PageDescription>
                {decode(state.source.author[data.id].name)}
                </PageDescription>
              </Header>
            ) : null}

            {/* If the list is a taxonomy or category, we render a title. */}
            {data.isTaxonomy || data.isCategory ? (
              <Header>
                {data.taxonomy.charAt(0).toUpperCase() + data.taxonomy.slice(1)}{" "}
                Archives:{" "}
                <PageDescription>
                {decode(state.source[data.taxonomy][data.id].name)}
                </PageDescription>
              </Header>
            ) : null}

          {/* Iterate over the items of the list. */}
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}
          <Pagination />
        </MainContent>
      </Container>
    </MainContainer>
  );
};

export default connect(List);

// const Container = styled.section`
//   width: 800px;
//   margin: 0;
//   padding: 24px;
//   list-style: none;
// `;
const TitleBox = styled.div`
  position: relative;

`

const HeaderTitle = styled.h1`
  position: absolute;
  
`

const HeaderIntro = styled.section`
  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), url(https://cdn.discordapp.com/attachments/692746506079567962/1003376896932855859/IMG_3538_conv.jpeg);
  background-size: cover;
  padding: 8rem 0;
  margin-top:-20px;
  margin-bottom:2rem;
  z-index: 2;
  position: relative;
`

const BlackOverlay = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  max-width: 100%;
  margin: 0px auto;
  text-align: center;
`


const MainContainer = styled.div`
`

const MainContent = styled.div`
  display: block;
  justify-content: center;
`

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const PageDescription = styled.span`
  font-weight: bold;
  font-family: var(--body-family);
  color: var(--color-text);
`;
