import classes from "./menu-button.module.css";
import Button from "~/shared/components/button";

interface Props {
  onClick: () => void;
}

export default function HeaderMenuButton({ onClick }: Props) {
  return (
    <Button bgColor="black" onClick={onClick} className={classes.container}>
      <span className={`bounded text-12 white`}>Меню</span>
    </Button>
  );
}
