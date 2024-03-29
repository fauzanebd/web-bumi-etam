import { styled, keyframes, css } from "frontity";

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

const Loading = () => (
  <Main>
    <Container>
      <div>
        <div css={bar(1)} />
        <div css={bar(2)} />
        <div css={bar(3)} />
        <div css={bar(4)} />
        <div css={bar(5)} />
      </div>
    </Container>
  </Main>
);

export default Loading;

const bar = (index) => css`
  background-color: rgba(12, 17, 43, 0.3);
  width: 4px;
  height: 24px;
  margin: 3px;
  border-radius: 0;
  display: inline-block;
  animation: ${scale} 1s ${index * 0.1}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;
