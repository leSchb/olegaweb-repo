import classes from "./myaudza.module.css";
import PageWrapper from "~/components/page-wrapper/ui";
import MyaudzaHero from "./hero";
import CaseRole from "~/components/case-page-role/ui";
import { myaudzaNavItems, myaudzaRole } from "../model";

export default function MyaudzaPage() {
  return (
    <PageWrapper navItems={myaudzaNavItems}>
      <MyaudzaHero />
      <CaseRole className={classes.role} {...myaudzaRole} />
    </PageWrapper>
  );
}
