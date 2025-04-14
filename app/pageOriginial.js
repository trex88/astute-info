import HomeHeader from "./_dashboard/HomeHeadings";
import InformationSection from "./_dashboard/AIInfoSection";
import QuoteSection from "./_dashboard/QuoteSection";
import VisionSection from "./_dashboard/VisionSection";
import CompanyFeaturesSection from "./_dashboard/CompanyFeaturesSection";
import TeamMembersSection from "./_dashboard/TeamMembersSection";
import AssistSection from "./_dashboard/AssistSection";
import TalkToExperts from "./_dashboard/TalkToExperts";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <InformationSection />
      <QuoteSection />
      <VisionSection />
      <CompanyFeaturesSection />
      <TeamMembersSection />
      <AssistSection />
      <TalkToExperts />
    </>
  );
}
