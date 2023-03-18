import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [

    {
        id: 1,
        title: "Информация",
        menu: [
            {
                id: 1,
                link: "О нас",
                path: "/"
            },
            {
                id: 2,
                link: "Обратная связь",
                path: "/"
            },
            {
                id: 3,
                link: "Сервисные центры",
                path: "/"
            },
            {
                id: 4,
                link: "Оплата и доставка",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Служба поддержки",
        menu: [
            {
                id: 1,
                link: "Возврат товара",
                path: "/"
            },
            {
                id: 2,
                link: "Карта сайта",
                path: "/"
            },
            {
                id: 3,
                link: "Политика конфиденциальности",
                path: "/"
            },
        ]
    },
    {
        id: 3,
        title: "Дополнительно",
        menu: [
            {
                id: 1,
                link: "О производителе",
                path: "/"
            },
            {
                id: 2,
                link: "Подарочные сертификаты",
                path: "/"
            },
            {
                id: 3,
                link: "Отследить заказ",
                path: "/"
            },
        ]
    },


];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "https://github.com/YourCatsy",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
    },
];
