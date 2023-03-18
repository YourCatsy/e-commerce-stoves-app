import React from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';

const Footer = () => {

    const currYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className="container">
                <div className="wrapper footer_wrapper">

                    <div className="address-info">
                        <p>г. Киев, ул. Николая Соловцова, 5<br />
                            <span className="sub-title">Пн-Пт:</span> с 9:00 до 18:00 <br />
                            <span className="sub-title">Суббота:</span> с 10:00 до 14:00<br />
                            <span className="sub-title">Воскресенье:</span> выходной</p>
                    </div>
                    {
                        footMenu.map(item => {
                            const { id, title, menu } = item;
                            return (
                                <div className="foot_menu" key={id}>
                                    <h4>{title}</h4>
                                    <ul>
                                        {
                                            menu.map(item => {
                                                const { id, link, path } = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>

                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="separator"></div>

            <div className="sub_footer">
                <div className="container">
                    <div className="sub_footer_wrapper">
                        <div className="foot_copyright">
                            <p>
                                {currYear} | StoveSeller. Все права защищены.
                            </p>
                        </div>
                        <div className="foot_social">

                            {
                                footSocial.map((item) => {
                                    const { id, icon, path } = item;
                                    return (
                                        <Link to={path} key={id}>{icon}</Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;