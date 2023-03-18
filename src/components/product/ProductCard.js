import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { DisplayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';

const ProductCard = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;
    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);

    const handleAddItem = () => {

        const item = { ...props };
        addItem(item);
        handleActive(id);
        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };

    const newPrice = DisplayMoney(finalPrice);
    const oldPrice = DisplayMoney(originalPrice);

    return (
        <>
            <div className="card products_card">
                <figure className="products_img">
                    <Link to={`${path}${id}`}>
                        <img src={images[0]} alt="product-img" />
                    </Link>
                </figure>
                <div className="products_details">
                    <span className="rating_star">
                        {
                            [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                        }
                    </span>
                    <div className='products_title-wrap'>
                        <h3 className="products_title">
                            <Link to={`${path}${id}`}>{title}</Link>
                        </h3>
                    </div>
                    <h5 className="products_info">{info}</h5>
                    <div className="separator"></div>
                    <div className='products_price-wrap'>
                        <h2 className="products_price">
                            {newPrice} &nbsp;
                            <small><del>{oldPrice}</del></small>
                        </h2>
                        <button
                            type="button"
                            className={`btn products_btn ${activeClass(id)}`}
                            onClick={handleAddItem}
                        >
                            {active ? 'Добавлено' : 'Добавить в корзину'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;