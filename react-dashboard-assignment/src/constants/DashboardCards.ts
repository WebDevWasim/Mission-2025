import { RiBankLine } from "react-icons/ri";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { GiBank } from "react-icons/gi";
import { PiInvoice } from "react-icons/pi";

const cards = [
  {
    id: "accBal",
    field: "Account Balance",
    value: 12356,
    // prevValues: [],
    fieldIcon: RiBankLine,
  },
  {
    id: "cash",
    field: "Cash",
    value: 21356,
    // prevValues: [],
    fieldIcon: HiOutlineBanknotes,
  },
  {
    id: "expenses",
    field: "Expenses",
    value: -12356,
    // prevValues: [],
    fieldIcon: PiInvoice,
  },
  {
    id: "investments",
    field: "Investments",
    value: 12356,
    // prevValues: [],
    fieldIcon: GiBank,
  },
];

export default cards;
