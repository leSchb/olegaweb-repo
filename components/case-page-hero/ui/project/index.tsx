import { ICaseProject } from "../../model/interface";

type Props = ICaseProject;

// TO DO: сделать анимацию для текста
export default function CasePageHeroProject({ name, description }: Props) {
  return (
    <h1 className="bounded gray bold text-48-32">
      <span className="black bounded text-48-32 bold">{name}</span>{" "}
      {description}
    </h1>
  );
}
