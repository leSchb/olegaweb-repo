import PageWrapper from "~/components/page-wrapper/ui";
import SectionWithTitle from "~/components/section-with-title/ui";

import HeroSection from "~/components/hero/ui";
import NumbersContent from "~/components/numbers-content/ui";
import ChooseRoleContent from "~/components/choose-role/ui";
import CasesContent from "~/components/cases-content/ui";
import AboutMeContent from "~/components/about-me-content/ui";
import ServicesContent from "~/components/services-content/ui";
import ReviewsContent from "~/components/reviews/ui";
import WorkProccessContent from "~/components/work-proccess/ui";

interface ISection {
  title: string;
  content: React.ReactNode;
  id?: string;
}

export default function HomePage() {
  const sections: ISection[] = [
    {
      title: "Цифры",
      content: <NumbersContent />,
      id: "numbers",
    },
    {
      title: "Выберите героя",
      content: <ChooseRoleContent />,
      id: "choose-role",
    },
    {
      title: "Избранные кейсы",
      content: <CasesContent />,
      id: "cases",
    },
    {
      title: "Обо мне",
      content: <AboutMeContent />,
      id: "about-me",
    },
    {
      title: "Услуги",
      content: <ServicesContent />,
      id: "services",
    },
    {
      title: "Отзывы",
      content: <ReviewsContent />,
      id: "reviews",
    },
    {
      title: "Рабочий процесс",
      content: <WorkProccessContent />,
      id: "work-proccess",
    },
  ];

  return (
    <PageWrapper>
      <HeroSection />
      {sections.map((item, index) => (
        <SectionWithTitle
          key={item.title + index}
          title={item.title}
          id={item.id}
        >
          {item.content}
        </SectionWithTitle>
      ))}
    </PageWrapper>
  );
}
