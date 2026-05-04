import classNames from "classnames";

import Button from "~/shared/components/button";
import { IBlockContainerButton, IBlockContainerButtonColor } from "../../model";

interface Props {
  buttonData: IBlockContainerButton;
  buttonColor?: IBlockContainerButtonColor;
  className?: string;
}

export default function BlockContainerButton({
  buttonData,
  buttonColor,
  className,
}: Props) {
  if (!buttonData.href) {
    return (
      <Button bgColor={buttonColor?.bgColor || "black"} className={className}>
        <span
          className={classNames(
            `bounded medium text-14-12`,
            buttonColor?.textColor || "white",
          )}
        >
          {buttonData.text}
        </span>
      </Button>
    );
  }

  return (
    <Button
      as={"a"}
      href="#contacts"
      bgColor={buttonColor?.bgColor || "black"}
      className={className}
    >
      <span
        className={classNames(
          `bounded medium text-14-12`,
          buttonColor?.textColor || "white",
        )}
      >
        {buttonData.text}
      </span>
    </Button>
  );
}
