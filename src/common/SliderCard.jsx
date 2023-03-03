import { Button, Card, Col, Image, Row } from "antd";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Radio } from "antd";
const SliderCard = ({ cardData, name }) => {
  return (
    <>
      <div className="slider-card-context">
        <div className="slider-title-wrapper">
          <div className="slider-title-border">
            <h3 className="slide-title">
              {name}
              <div className="slider-title-border-bold"></div>
            </h3>
          </div>
          <div className="tournaments-card-wrapper">
            <Swiper
              spaceBetween={1}
              freeMode={true}
              className="mySwiper"
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                300: {
                  width: 300,
                  slidesPerView: 3.5,
                },
                500: {
                  width: 500,
                  slidesPerView: 3.5,
                },
                900: {
                  width: 900,
                  slidesPerView: 4,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 4,
                },
              }}
            >
              {cardData.map((d, i) => {
                return (
                  <SwiperSlide>
                    <Row gutter={4}>
                      <Col span={22}>
                        <Card
                        width={150}
                          cover={
                            <img
                              alt="example"
                              src={d.image}
                            />
                          }
                        >
                          <div className="card-wrapper" key={i}>
                            <div className="tournaments-card">
                              <h5 className="product-name">Lemon</h5>
                              <Row className="product-price">
                                <p className="price">$2.47</p>
                              </Row>
                              <Radio.Group size="small" defaultValue="a" buttonStyle="solid">
                                <Radio.Button value="a">Red</Radio.Button>
                                <Radio.Button value="b">Pink</Radio.Button>
                                <Radio.Button value="c">Yellow</Radio.Button>
                                <Radio.Button value="d">Purple</Radio.Button>
                              </Radio.Group>
                              <Row className="product-button-wrapper">
                                <Button className="butoon-add">
                                  SHOW
                                </Button>
                              </Row>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
