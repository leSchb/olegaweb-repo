import classes from "./myaudza.module.css";
import PageWrapper from "~/components/page-wrapper/ui";
import MyaudzaHero from "./hero";
import CaseRole from "~/components/case-page-role/ui";
import CasePageSteps from "~/components/case-page-steps/ui";
import { myaudzaNavItems, myaudzaRole, myaudzaSteps } from "../model";

export default function MyaudzaPage() {
  return (
    <PageWrapper navItems={myaudzaNavItems}>
      <MyaudzaHero />
      <CaseRole className={classes.role} {...myaudzaRole} />
      <CasePageSteps
        steps={myaudzaSteps}
        imagesDir="/myaudza/steps"
        stepClassName={classes.step}
      />
    </PageWrapper>
  );
}
