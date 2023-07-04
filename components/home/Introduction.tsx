import ContentRow from "../layout/ContentRow";
import SocialWrapper from "./SocialWrapper";

export default function Introduction() {
  return (
    <ContentRow>
      <div className="max-w-2xl">
        <h1>Software designer, founder, and amateur astronaut.</h1>
        <p className="mt-6">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <SocialWrapper></SocialWrapper>
      </div>
    </ContentRow>
  );
}
