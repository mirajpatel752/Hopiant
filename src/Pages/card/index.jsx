import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Image, Rate, Row } from "antd";
import cageyTableData from "../../utility/utility";
import SliderCard from "../../common/SliderCard";
const LandingPage = () => {
  const navigate = useNavigate();
  const { cardData } = cageyTableData();
  const produceDeteils = () => {
    navigate("/shopsdetails-all");
  };

  return (
    <>
      <div className="container">
        <div className="landing-page-shop-found">
          <div className="card-deteils">
            <Row gutter={16}>
              <Col className="gutter-row">
                  <SliderCard cardData={cardData} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
