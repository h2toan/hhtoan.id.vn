import Introduction from "../components/home/Introduction";
import ImageWrapper from "../components/home/ImageWrapper";
import ProfileDetail from "../components/home/ProfileDetail";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software designer, founder, and amateur astronaut.",
  description:
    "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
};

export default function HomePage() {
  return (
    <>
      <Introduction></Introduction>
      <ImageWrapper></ImageWrapper>
      <ProfileDetail></ProfileDetail>
    </>
  );
}
