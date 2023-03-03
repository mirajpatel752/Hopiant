import { Avatar, Button, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const ShopAdetailsAll = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { activeTagId } = useSelector((state) => state.tagsView);

  const data = useMemo(() => {
    if (activeTagId.length > 0) {
      return activeTagId[0];
    } else if (state) {
      return state;
    }
  }, [state, activeTagId]);


  return (
    <>
      <div className="container">
        <div className="slider-card-context">
          <div className="slider-title-wrapper">
            <Card
              style={{
                width: 200,
              }}
              cover={<img alt="example" src={data.details.image} />}
            >
              <p>Product : {data.name}</p>
              <p>Color : {data.details.color}</p>
              <p>Price : {data.details.price}$</p>
              <Button type="primary" onClick={()=>navigate(-1)}>BACK</Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAdetailsAll;
