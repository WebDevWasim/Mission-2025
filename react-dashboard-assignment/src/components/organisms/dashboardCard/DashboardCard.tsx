import { GiExpand } from "react-icons/gi";
import Card from "../../molecules/card/Card";
import CurrencyInput from "../../molecules/currencyInput/CurrencyInput";
import { CardContent } from "./DashboardCard.styled";

type DashboardCardProps = {
  title: string;
  currencyAmount: number;
  isEdit?: boolean;
  contentIcon: React.ReactNode;
  onAmountChange: () => void;
};

const DashboardCard = ({
  title,
  currencyAmount,
  onAmountChange,
  contentIcon,
  isEdit = false,
}: DashboardCardProps) => {
  return (
    <Card
      title={title}
      headerActionIcon={<GiExpand />}
      handleActionIcon={() => {}}
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
