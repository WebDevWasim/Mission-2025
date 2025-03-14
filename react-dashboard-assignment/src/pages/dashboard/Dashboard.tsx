import { DashboardContainer } from "./Dashboard.styled";
import DashboardCard from "../../components/organisms/dashboardCard/DashboardCard";
import { RiBankLine } from "react-icons/ri";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { GiBank } from "react-icons/gi";
import { PiInvoice } from "react-icons/pi";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardCard
        title="Account Balance"
        currencyAmount={213872}
        onAmountChange={() => {}}
        contentIcon={<RiBankLine />}
      />
      <DashboardCard
        title="Cash"
        currencyAmount={12872}
        onAmountChange={() => {}}
        isEdit
        contentIcon={<HiOutlineBanknotes />}
      />
      <DashboardCard
        title="Expenses"
        currencyAmount={-323872}
        onAmountChange={() => {}}
        isEdit
        contentIcon={<PiInvoice />}
      />
      <DashboardCard
        title="Investments"
        currencyAmount={413872}
        onAmountChange={() => {}}
        contentIcon={<GiBank />}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
