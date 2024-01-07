import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featuredInfo">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs. 24,415</span>
          <span className="featuredMoneyRate">
            -1140 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs. 44,415</span>
          <span className="featuredMoneyRate">
            -114 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs. 22,225</span>
          <span className="featuredMoneyRate">
            +1140.5 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
