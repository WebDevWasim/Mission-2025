import { CSS } from "styled-components/dist/types";
import {
  ActionButton,
  CardBody,
  CardContainer,
  CardHeader,
  CardTitle,
} from "./Card.styled";

type HeaderAction = {
  headerActionIcon: React.ReactNode;
  handleActionIcon: () => void;
};
type HeaderActionOptional = {
  headerActionIcon?: never;
  handleActionIcon?: never;
};
type Action = HeaderAction | HeaderActionOptional;

type CardProps = {
  title: string;
  width?: string;
  ref:
    | React.RefObject<HTMLDivElement>
    | ((instance: HTMLDivElement | null) => void);
  style: CSS.Properties;
  children: React.ReactNode;
} & Action;

const Card = ({
  title,
  children,
  headerActionIcon,
  handleActionIcon,
  ref,
  ...props
}: CardProps) => {
  return (
    <CardContainer ref={ref} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {headerActionIcon && (
          <ActionButton onClick={handleActionIcon}>
            {headerActionIcon}
          </ActionButton>
        )}
      </CardHeader>
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
};

export default Card;
