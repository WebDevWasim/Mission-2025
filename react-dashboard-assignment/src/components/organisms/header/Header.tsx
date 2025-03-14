import { useState } from "react";
import { AppHeader, SaveButtonGroup, Title } from "./Header.styled";
import { Button } from "../../atoms/Botton";
import { FaChartBar, FaRegEdit, FaRegSave } from "react-icons/fa";
import { useLocation } from "react-router";
import { dashboardPath } from "../../../constants/routes";

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { pathname } = useLocation();
  const isDashboardPath = pathname.includes(dashboardPath);

  return (
    <AppHeader>
      <Title>
        <span>
          <FaChartBar />
        </span>
        Playground
      </Title>
      {isDashboardPath && (
        <>
          {!isEditing && (
            <Button
              name="Switch to Edit Mode"
              icon={<FaRegEdit />}
              onClick={() => setIsEditing(true)}
            />
          )}

          {isEditing && (
            <SaveButtonGroup>
              <Button name="Cancel" onClick={() => setIsEditing(false)} />
              {/* TODO: Work on SAVE */}
              <Button
                name="Save"
                variant="secondary"
                icon={<FaRegSave />}
                onClick={() => setIsEditing(false)}
              />
            </SaveButtonGroup>
          )}
        </>
      )}
    </AppHeader>
  );
};

export default Header;
