import PageWrapper from "~/components/page-wrapper/ui";
import MyaudzaHero from "./hero";
import { navItems } from "~/components/nav/model";

export default function MyaudzaPage() {
  return (
    <PageWrapper navItems={navItems}>
      <MyaudzaHero />
    </PageWrapper>
  );
}
