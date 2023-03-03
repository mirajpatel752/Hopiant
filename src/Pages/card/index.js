// import blue from "./assets/image/blue.jpg";
// import gray from "./assets/image/midnight.jpg";
// import purple from "./assets/image/purple.jpg";
// import red from "./assets/image/red.jpg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import cageyTableData from "../../utility/utility";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCard } from "../../store/card.store";
import { setActiveTag } from "../../store/tags-view.store";


function Apple() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = cageyTableData();
  const [id, setId] = useState(0);
  const [choiceColor, setChoiceColor] = useState({
    0: 0,
  });
  const [choiceColorData, setChoiceColorData] = useState({
    name: "",
    details: {},
  });
  const tags = useSelector((state) => state.card.card);

  const onSelectColor = (index, sIndex) => {
    setId(sIndex);
    setChoiceColor({
      ...choiceColor,
      [index]: sIndex,
    });
  };
  const viewCard = (data) => {
    console.log(data, "data");
    setChoiceColorData({
      name: data.name,
      details: data.details[id],
    });
    dispatch(setActiveTag([{
      name: data.name,
      details: data.details[id],
    }]));
    navigate("/card-details", {
      state: {
        name: data.name,
        details: data.details[id],
      },
    });
  };

  useEffect(() => {
    dispatch(setCard(product));
  }, []);




  return (
    <>
      <div className="container">
        <div className="slider-card-context">
          <div className="slider-title-wrapper">
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
              {tags.map((d, i) => (
                <SwiperSlide>
                  <Row gutter={4}>
                    <Col span={22}>
                      <div className="card" key={i}>
                        <img
                          className="product_img"
                          src={
                            d.details[choiceColor[i] ? choiceColor[i] : 0].image
                          }
                          alt=""
                        />
                        <p>Product : {d.name}</p>
                        <p>
                          Color :{" "}
                          {d.details[choiceColor[i] ? choiceColor[i] : 0].color}
                        </p>
                        <p>
                          Choice Color :
                          {d.details.map((detail, Index) => (
                            <span
                              key={Index}
                              className="color_dot"
                              style={{
                                background: detail.color,
                              }}
                              onClick={() => onSelectColor(i, Index)}
                            ></span>
                            
                          ))}
                        </p>
                        <p>
                          Price :{" "}
                          {d.details[choiceColor[i] ? choiceColor[i] : 0].price}$
                        </p>
                        <button onClick={() => viewCard(d)}>SHOW</button>
                      </div>
                    </Col>
                  </Row>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apple;
