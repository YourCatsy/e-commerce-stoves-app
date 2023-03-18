import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import { CalculateTotal, DisplayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import AppModal from '../modal/ModalWindow';

const Cart = () => {

    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);
    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = CalculateTotal(cartTotal);
    const displayCartTotal = DisplayMoney(calculateCartTotal);

    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = CalculateTotal(cartDiscount);
    const displayCartDiscount = DisplayMoney(calculateCartDiscount);

    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = DisplayMoney(totalAmount);


    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<BsCartX />}
                                msg="Ваша корзина пуста"
                                link="/all-products"
                                btnText="Начать покупки"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Количество товаров &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'единиц' : 'единица'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Цена без скидки</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Скидка</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Доставка</span>
                                                <b>Бесплатно</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Сумма заказа</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <AppModal />

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;