import { Link } from "react-router-dom";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" placeholder="file" />
        </div>

        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>

        <div className="addProductItem">
          <label>Stock</label>
          <input type="email" placeholder="123" />
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select className="addProductSelect" name="active" id="active">
            <option value={"yes"}>Yes</option>
            <option value={"no"}>No</option>
          </select>
        </div>

        <Link to="/products">
          <button className="addProductButton">Create</button>
        </Link>
      </form>
    </div>
  );
};

export default NewProduct;
