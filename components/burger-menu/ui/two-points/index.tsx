import Points3 from "~/public/footer/3-points.svg";
import Points2 from "~/public/footer/2-points.svg";
import Button from "~/shared/components/button";

export default function BurgerTwoPoints({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-row flex-start justify-between">
      <Points3 />
      <Button onClick={onClose}>
        <Points2 />
      </Button>
    </div>
  );
}
