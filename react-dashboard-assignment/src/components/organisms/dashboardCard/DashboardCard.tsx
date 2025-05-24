import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GiExpand } from "react-icons/gi";
import Card from "../../molecules/card/Card";
import CurrencyInput from "../../molecules/currencyInput/CurrencyInput";
import { CardContent } from "./DashboardCard.styled";

type DashboardCardProps = {
  id: string;
  title: string;
  currencyAmount: number;
  isEdit?: boolean;
  contentIcon: React.ReactNode;
  onAmountChange: () => void;
};

const DashboardCard = ({
  id,
  title,
  currencyAmount,
  onAmountChange,
  contentIcon,
  isEdit = false,
}: DashboardCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <Card
      title={title}
      headerActionIcon={<GiExpand />}
      handleActionIcon={() => {}}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <CardContent>
        {contentIcon}
        <CurrencyInput
          value={currencyAmount}
          onChange={onAmountChange}
          isEdit={isEdit}
        />
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
