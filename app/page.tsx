import Container from "../components/Container";
import ContentWrapper from "../components/ContentWrapper";

import Introduction from "../components/Introduction";
import ImageCollection from "../components/ImageCollection";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Container></Container>
      <ContentWrapper>
        <Header></Header>
        <MainContent>
          <Introduction></Introduction>
          <ImageCollection></ImageCollection>
        </MainContent>
        <Footer></Footer>
      </ContentWrapper>
    </>
  );
}
