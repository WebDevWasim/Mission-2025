import { useState, ElementType } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { DashboardContainer } from "./Dashboard.styled";
import DashboardCard from "../../components/organisms/dashboardCard/DashboardCard";
import cards from "../../constants/DashboardCards";

type DashboardCards = {
  id: string;
  field: string;
  value: number;
  // prevValues?: any[];
  fieldIcon: ElementType;
};

const Dashboard = () => {
  const [dashboardCards, setDashboardCards] = useState<DashboardCards[]>(cards);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    const findCardIndex = (cards: DashboardCards[], id: string) =>
      cards.findIndex((card) => card.id === id);

    if (active.id !== over.id) {
      setDashboardCards((prevCards) => {
        const oldIndex = findCardIndex(prevCards, active.id);
        const newIndex = findCardIndex(prevCards, over.id);
        return arrayMove(prevCards, oldIndex, newIndex);
      });
    }
  }
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={dashboardCards}>
        <DashboardContainer>
          {dashboardCards.map(({ id, field, value, fieldIcon }) => {
            const FieldIcon = fieldIcon;
            return (
              <DashboardCard
                id={id}
                key={id}
                title={field}
                currencyAmount={value}
                onAmountChange={() => {}}
                contentIcon={<FieldIcon />}
              />
            );
          })}
        </DashboardContainer>
      </SortableContext>
    </DndContext>
  );
};

export default Dashboard;
