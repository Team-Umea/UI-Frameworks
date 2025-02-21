import GetStartedSection from "./GetStartedSection";
import Hero from "./Hero";
import InfoCard from "./InfoCard";

export default function Content() {
  return (
    <div>
      <Hero />
      <InfoCard
        type={1}
        heading={"Cool! Awesome!"}
        subHeading={"New ideas, great adventures big cool travels"}
      />
      <InfoCard
        type={2}
        heading={"Great Big IDEA"}
        subHeading={"Here you see some great idea for some cool designs"}
      />
      <GetStartedSection />
    </div>
  );
}
