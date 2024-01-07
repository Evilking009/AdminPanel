import "./widgetLg.css";

const WidgetLg = () => {
  const imgUrl =
    "https://img.freepik.com/free-photo/attractive-dark-haired-man-is-working-table-office-he-wears-blue-shirt-with-black-jacket-he-is-taking-cup-coffee-smiling-camera_197531-516.jpg";

  const Button = ({ type }) => (
    <button className={`widgetLgButton ${type}`}>{type}</button>
  );

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={imgUrl} alt="" className="widgetLgImg" />
            <span className="widgetLgName">James Keller</span>
          </td>
          <td className="widgetLgDate">2 Jun 2024</td>
          <td className="widgetLgAmount">Rs. 26,500</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={imgUrl} alt="" className="widgetLgImg" />
            <span className="widgetLgName">James Keller</span>
          </td>
          <td className="widgetLgDate">2 Jun 2024</td>
          <td className="widgetLgAmount">Rs. 26,500</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={imgUrl} alt="" className="widgetLgImg" />
            <span className="widgetLgName">James Keller</span>
          </td>
          <td className="widgetLgDate">2 Jun 2024</td>
          <td className="widgetLgAmount">Rs. 26,500</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
