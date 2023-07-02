import ContentRow from "./ContentRow";
import ArticleWrapper from "./ArticleWrapper";
import WidgetWrapper from "./WidgetWrapper";

export default function ProfileDetail() {
  return (
    <ContentRow>
      <div className="mx-auto mt-24 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <ArticleWrapper></ArticleWrapper>
        <WidgetWrapper></WidgetWrapper>
      </div>
    </ContentRow>
  );
}
