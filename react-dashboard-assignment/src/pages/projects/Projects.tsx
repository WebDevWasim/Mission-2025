import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import rowData from "../../constants/ProjectData";
import {
  GridWrapper,
  ProgressBar,
  ProgressBarContainer,
} from "./Projects.styled";

ModuleRegistry.registerModules([AllCommunityModule]);

const ProgressCellRenderer = ({ value }: { value: number }) => {
  let color = "red";
  if (value === 100) {
    color = "green";
  } else if (value > 50) {
    color = "orange";
  }
  return (
    <ProgressBarContainer>
      <ProgressBar value={value} color={color}>
        {value}%
      </ProgressBar>
    </ProgressBarContainer>
  );
};

const ProjectProgressGrid = () => {
  const [columnDefs] = useState<ColDef[]>([
    { headerName: "ID", field: "taskId", width: 100 },
    { headerName: "Project", field: "project", width: 150 },
    { headerName: "Task", field: "task", width: 150 },
    { headerName: "Team Member", field: "teamMember", width: 150 },
    { headerName: "Start Date", field: "startDate", width: 120 },
    { headerName: "End Date", field: "endDate", width: 120 },
    {
      headerName: "Progress",
      field: "progress",
      width: 180,
      cellRenderer: ProgressCellRenderer,
    },
    { headerName: "Status", field: "status", width: 120 },
  ]);

  return (
    <div>
      <div>
        <GridWrapper>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={{
              // resizable: true,
              sortable: true,
              filter: true,
              flex: 1,
              // minWidth: 100,
              // autoHeight: true,
            }}
            pagination={true}
            paginationPageSize={10}
            animateRows={true}
            suppressRowHoverHighlight={true}
          />
        </GridWrapper>
      </div>
    </div>
  );
};

export default ProjectProgressGrid;
