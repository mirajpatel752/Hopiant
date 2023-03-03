import phone from "../assets/image/iphone-11-128-.jpeg";
import phone1 from "../assets/image/iphone-11-64-a.jpeg";
import phone12 from "../assets/image/iphone-13.jpeg";
import phone2 from "../assets/image/iphone-11.jpeg";
import phone3 from "../assets/image/iphone-11-256.jpeg";
import phone4 from "../assets/image/apple-iphone-x-.jpeg";
import phone5 from "../assets/image/apple-iphone-8-plus.jpeg";
import phone6 from "../assets/image/apple-iphone-xr.jpeg";
import phone7 from "../assets/image/apple-iphone-11.jpeg";


export default function data() {
  return {
    product: [
      {
        name: "iphone 11",
        details: [
          {
            image: phone,
            price: 100,
            color: "blue",
          },
          {
            image: phone1,
            price: 200,
            color: "gray",
          },
          {
            image: phone12,
            price: 300,
            color: "purple",
          },
          {
            image: phone2,
            price: 400,
            color: "red",
          },
        ],
      },
      {
        name: "iphone 14",
        details: [
          {
            image: phone,
            price: 10,
            color: "blue",
          },
          {
            image: phone1,
            price: 20,
            color: "gray",
          },
          {
            image: phone2,
            price: 30,
            color: "purple",
          },
          {
            image: phone12,
            price: 40,
            color: "red",
          },
        ],
      },
      {
        name: "iphone 11 mini",
        details: [
          {
            image: phone6,
            price: 10,
            color: "blue",
          },
          {
            image: phone2,
            price: 20,
            color: "gray",
          },
          {
            image: phone1,
            price: 30,
            color: "purple",
          },
          {
            image: phone,
            price: 40,
            color: "red",
          },
        ],
      },
      {
        name: "iphone X",
        details: [
          {
            image: phone4,
            price: 10,
            color: "blue",
          },
          {
            image: phone3,
            price: 20,
            color: "gray",
          },
          {
            image: phone4,
            price: 30,
            color: "purple",
          },
          {
            image: phone5,
            price: 40,
            color: "red",
          },
        ],
      },
      {
        name: "iphone 7 plush",
        details: [
          {
            image: phone5,
            price: 10,
            color: "blue",
          },
          {
            image: phone3,
            price: 20,
            color: "gray",
          },
          {
            image: phone5,
            price: 30,
            color: "purple",
          },
          {
            image: phone3,
            price: 40,
            color: "red",
          },
        ],
      },
      {
        name: "iphone 11",
        details: [
          {
            image: phone7,
            price: 11,
            color: "blue",
          },
          {
            image: phone1,
            price: 12,
            color: "gray",
          },
          {
            image: phone12,
            price: 13,
            color: "purple",
          },
          {
            image: phone2,
            price: 14,
            color: "red",
          },
        ],
      },
    ],
  };
}
