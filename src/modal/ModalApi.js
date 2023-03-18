import React, { useContext } from 'react';
import { DisplayMoney } from '../helpers/utils';
import { CalculateTotal } from '../helpers/utils';
import cartContext from '../contexts/cart/cartContext';
import { useState } from "react";

function ModalApi() {

    const [name, setName] = useState("");
    const [surname, setEmail] = useState("");
    const [phone, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [text, setText] = useState("")
    const [city, setCity] = useState("");
    const [post, setPost] = useState("");

    const { cartItems } = useContext(cartContext);

    const cartTotal = cartItems.map(item => {

        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = CalculateTotal(cartTotal);
    const displayCartTotal = DisplayMoney(calculateCartTotal);

    const cartDiscount = cartItems.map(item => {

        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = CalculateTotal(cartDiscount);
    const itemTitle = cartItems.map(item => {

        return item.title;
    });

    function getItem() {

        return cartItems;
    }

    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = DisplayMoney(totalAmount);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://63c1c63e99c0a15d28f1eb60.mockapi.io/api/stoves", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    surname: surname,
                    phone: phone,
                    text: text,
                    city: city,
                    post: post,
                    displayTotalAmount: displayTotalAmount,
                    originalPrice: displayCartTotal,
                    titles: itemTitle,

                }),
            });

            if (res.ok) {
                setName("");
                setEmail("");
                setCity("");
                setPost("");
                setMobileNumber("");
                setMessage("Ваш заказ отправлен. Мы с вами свяжемся :)");
                setText("");
                DisplayMoney(calculateCartDiscount);
                DisplayMoney(totalAmount)
                DisplayMoney(calculateCartTotal);
                getItem();
            } else {
                setMessage("Ошибка. Ваш заказ не отправлен :(");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className='field_position'>
                    <label className="input_label">Имя<span className='input_star'> *</span></label>
                    <input
                        pattern="^[\а-яА-Я-a-zA-Z]{2,}(?[\а-яА-Я-a-zA-Z]{0,}){2}$"
                        autofocus
                        className='input_field'
                        type="text"
                        required
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field_position'>
                    <label className="input_label">Фамилия<span className='input_star'> *</span></label>
                    <input
                        pattern="^[\а-яА-Я-a-zA-Z]{2,}(?[\а-яА-Я-a-zA-Z]{0,}){2}$"
                        className='input_field'
                        type="text"
                        required
                        value={surname}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='field_position'>
                    <label className="input_label">Номер телефона (начиная с 380)<span className='input_star'> *</span></label>
                    <input
                        pattern="^((\+38)|(38))?0[0-9]{9}$"
                        type="tel"
                        placeholder="Номер телефона"
                        required
                        value={phone}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className='input_field '
                    />
                </div>
                <div className='field_position'>
                    <label className="input_label">Комментарий к заказу</label>
                    <textarea
                        placeholder="Оставьте комментарий"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                </div>
                <div className='field_position'>
                    <label className="input_label">Населенный пункт</label>
                    <input
                        className='input_field '
                        placeholder="Введите название населенного пункта"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </div>
                <div className='field_position'>
                    <label className="input_label">Отделение Новой почты</label>
                    <input
                        pattern="^\d+$"
                        className='input_field'
                        placeholder="Введите номер отделения"
                        onChange={(e) => setPost(e.target.value)}
                        value={post}
                    />
                </div>
                <button className='btn' type="submit">Отправить заказ</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
}

export default ModalApi;