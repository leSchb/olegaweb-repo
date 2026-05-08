import classes from "./myaudza.module.css";
import PageWrapper from "~/components/page-wrapper/ui";
import CasePageHero from "~/components/case-page-hero/ui";
import { navItems } from "~/components/nav/model";
import { myaudzaHero } from "../model";

export default function MyaudzaPage() {
  return (
    <PageWrapper navItems={navItems}>
      <CasePageHero {...myaudzaHero} className={classes.container} />
    </PageWrapper>
  );
}
