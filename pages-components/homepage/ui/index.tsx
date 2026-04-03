import HeroSection from "~/components/hero/ui";
import NumbersContent from "~/components/numbers-content/ui";
import PageWrapper from "~/components/page-wrapper/ui";
import SectionWithTitle from "~/components/section-with-title/ui";

interface ISection {
  title: string;
  content: React.ReactNode;
}

export default function HomePage() {
  const sections: ISection[] = [
    {
      title: "Цифры",
      content: <NumbersContent />,
    },
  ];

  return (
    <PageWrapper>
      <HeroSection />
      {sections.map((item, index) => (
        <SectionWithTitle key={item.title + index} title={item.title}>
          {item.content}
        </SectionWithTitle>
      ))}
    </PageWrapper>
  );
}
