import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useState } from "react";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => setData(data.filter((item) => item.id !== id));

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: true,
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
