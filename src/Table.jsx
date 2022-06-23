import "./Table.css";
const box = {
  color: "rgb(50, 96, 168)",
  fontSize: "50px",
};
const box2 = {
  color: "black",
  fontSize: "23px",
};
const Table = () => {
  return (
    <>
      <h1 style={box}>
        Dashboard
        <span>
          <input
            class="form-control "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i class="fa fa-search"></i>
        </span>
      </h1>
      <h1 style={box2} className="text-center">
        Goods Details
      </h1>

      <div className="tbl">
        <table className="table table-hover  p-4 table-bordered border-primary  ">
          <thead className="p-5  mb-2 bg-light text-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Exp.Date</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody className="p-3 mb-2 bg-light text-dark">
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>abc</td>
              <td>12</td>
              <td>12/1/22</td>
              <td>abc</td>
            </tr>{" "}
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>abc</td>
              <td>12</td>
              <td>12/1/22</td>
              <td>abc</td>
            </tr>{" "}
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>abc</td>
              <td>12</td>
              <td>12/1/22</td>
              <td>abc</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>abc</td>
              <td>12</td>
              <td>12/1/22</td>
              <td>abc</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>abc</td>
              <td>12</td>
              <td>12/1/22</td>
              <td>abc</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>abc</td>
              <td>12</td>
              <td>12/1/22</td>
              <td>abc</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>abc</td>
              <td>12</td>
              <td>12/1/22</td>
              <td>abc</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
