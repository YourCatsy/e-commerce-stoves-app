import React from 'react';
import { Link } from 'react-router-dom';

const CartItemModal = (props) => {
    const { id, title, info } = props;

    return (
        <>
            <Link to={`/product-details/${id}`}>{title} {info}</Link>
        </>
    );
}

export default CartItemModal;