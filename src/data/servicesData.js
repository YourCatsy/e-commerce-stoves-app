import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaShippingFast />,
        title: "Быстрая доставка",
        info: "Доставяем в течении 24 часов",
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "Качество товара",
        info: "100% оригинальные товары",
    },
    {
        id: 3,
        icon: <FaTags />,
        title: "Скидки и предложения",
        info: "На все предоплаченные товары",
    },
    {
        id: 4,
        icon: <FaCreditCard />,
        title: "Безопасность",
        info: "Безопасная оплата в интернете",
    },
];

export default servicesData;