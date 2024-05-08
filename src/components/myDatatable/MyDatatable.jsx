import "./myDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "name", width: 130 },
];

const rows = [
  { id: 1, Name: "Coffee"},
  { id: 2, Name: "Non Coffee"},
  { id: 3, Name: "Cake"},
  { id: 4, Name: "Pastry"},
  { id: 5, Name: "Cookie"},
];

const myDatatable = () => {
  return (
    <div className="myDatatable">
      <div className="myDatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default myDatatable;
