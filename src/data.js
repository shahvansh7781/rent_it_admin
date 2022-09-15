import axios from "axios";
export const chartData = [
  {
    Month: "Jan",
    Sales: 4000,
  },
  {
    Month: "Feb",
    Sales: 1000,
  },
  {
    Month: "March",
    Sales: 400,
  },
  {
    Month: "April",
    Sales: 4900,
  },
  {
    Month: "May",
    Sales: 10000,
  },
  {
    Month: "June",
    Sales: 1000,
  },
  {
    Month: "July",
    Sales: 4070,
  },
  {
    Month: "Aug",
    Sales: 480,
  },
  {
    Month: "Sept",
    Sales: 40,
  },
  {
    Month: "Oct",
    Sales: 0,
  },
  {
    Month: "Nov",
    Sales: 4090,
  },
  {
    Month: "Dec",
    Sales: 8000,
  },
];

export const userRows = [
  {
    id: 1,
    username: "Alia Bhatt",
    avtar:
      "https://s.yimg.com/fz/api/res/1.2/cNVerJHd13sqqx_mSlfQSQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/4cb8a5ec-d715-324f-9cee-731a1dcde6b9/t_500x300",
    email: "ab@gmail.com",
    role: "user",
  },

  {
    id: 2,
    username: "Dharak",
    avtar:
      "https://s.yimg.com/fz/api/res/1.2/cNVerJHd13sqqx_mSlfQSQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/4cb8a5ec-d715-324f-9cee-731a1dcde6b9/t_500x300",
    email: "ab@gmail.com",
    role: "admin",
  },

  {
    id: 3,
    username: "Vrajesh",
    avtar:
      "https://s.yimg.com/fz/api/res/1.2/cNVerJHd13sqqx_mSlfQSQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/4cb8a5ec-d715-324f-9cee-731a1dcde6b9/t_500x300",
    email: "ab@gmail.com",
    role: "admin",
  },
];

// const cars = [];
// export const getCars = () => {
//   fetch("/myapp/cars").then((car) => {
//     Object.values(car)[1].forEach((element) => {
//       cars.push({
//         _id: element._id,
//         title: element.title,
//         noPlate: element.noPlate,
//         rent: element.rent,
//       });
//     });
//   });
// };
// console.log(cars);
// const getCars = async () => {
//   await axios.get("http://localhost:5000/myapp/cars").then((car) => {
//     // Object.values(car)[1].map((e) => {
//     //   console.log(e.title);
//     // });
//     console.log(Object.values(car.data)[1][0].title);
//   });
// };
// getCars();
export const productRows = [
  {
    id: 1,
    name: "Tata Nexon",
    img: "https://tse4.mm.bing.net/th?id=OIP.kdNjCeAk4JGZGc4KBsQpLQHaEK&pid=Api&P=0",
    number: "GJ06 1234",

    rent: "$2,322",
  },
  {
    id: 2,
    name: "Tata Nexon",
    img: "",
    number: "GJ06 1234",
    rent: "$2,322",
  },
];

export const productData = [
  {
    Month: "Jan",
    Sales: 4000,
  },
  {
    Month: "Feb",
    Sales: 1000,
  },
  {
    Month: "March",
    Sales: 400,
  },
];
export const feedbackRows = [
  {
    id: 1,
    username: "Alia Bhatt",
    avtar:
      "https://s.yimg.com/fz/api/res/1.2/cNVerJHd13sqqx_mSlfQSQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/4cb8a5ec-d715-324f-9cee-731a1dcde6b9/t_500x300",
    email: "ab@gmail.com",
    status: "Active",
    date: "10 Dec",
  },
];
