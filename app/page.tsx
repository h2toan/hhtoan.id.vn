import Container from "../components/Container";
import ContentWrapper from "../components/ContentWrapper";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Container></Container>
      <ContentWrapper>
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
      </ContentWrapper>
    </>
  );
}
