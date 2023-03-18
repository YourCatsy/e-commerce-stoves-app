import React from 'react';
import useActive from '../../hooks/useActive';

const ProductSummary = (props) => {

    const {
        brand,
        title,
        category,
        noiselevel,
        filtertype,
        controltype,
        display,
        lighttype,
        duct,
        width,
        color,
        peculiarities,
        country,
        guarantee,
        speeds,
        performance,
        desc,
        desc2,
        desc3,
        desc4,
        desc5,
        desc6,
        workingmode,
        brand1,
        category1,
        noiselevel1,
        filtertype1,
        controltype1,
        display1,
        lighttype1,
        duct1,
        width1,
        color1,
        peculiarities1,
        country1,
        guarantee1,
        speeds1,
        performance1,
        workingmode1
    } = props;
    const { active, handleActive, activeClass } = useActive('overview');

    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Описание товара
                            </li>
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                Характеристики
                            </li>
                        </ul>
                    </div>
                    <div className="prod_summary_details">
                        {active === 'overview' ? (
                            <div className="prod_overview">
                                <h3> <span>{title}</span></h3>
                                <ul >
                                    <li >{desc}</li>
                                    <li>{desc2}</li>
                                    <li >{desc3}</li>
                                    <li>{desc4}</li>
                                    <li >{desc5}</li>
                                    <li>{desc6}</li>
                                </ul>
                            </div>
                        )
                            : (
                                <div className="prod_specs">
                                    <div>
                                        <table className="prod_specs-table">
                                            <thead>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{brand1}</td>
                                                    <td>{brand}</td>
                                                </tr>
                                                <tr>
                                                    <td>{workingmode1}</td>
                                                    <td>{workingmode}</td>
                                                </tr>
                                                <tr>
                                                    <td>{category1}</td>
                                                    <td>{category}</td>
                                                </tr>
                                                <tr>
                                                    <td>{speeds1}</td>
                                                    <td>{speeds}</td>
                                                </tr>
                                                <tr>
                                                    <td>{performance1}</td>
                                                    <td>{performance}</td>
                                                </tr>
                                                <tr>
                                                    <td>{noiselevel1}</td>
                                                    <td>{noiselevel}</td>
                                                </tr>
                                                <tr>
                                                    <td>{filtertype1}</td>
                                                    <td>{filtertype}</td>
                                                </tr>
                                                <tr>
                                                    <td>{controltype1}</td>
                                                    <td>{controltype}</td>
                                                </tr>
                                                <tr>
                                                    <td>{display1}</td>
                                                    <td>{display}</td>
                                                </tr>
                                                <tr>
                                                    <td>{lighttype1}</td>
                                                    <td>{lighttype}</td>
                                                </tr>
                                                <tr>
                                                    <td>{duct1}</td>
                                                    <td>{duct}</td>
                                                </tr>
                                                <tr>
                                                    <td>{width1}</td>
                                                    <td>{width}</td>
                                                </tr>
                                                <tr>
                                                    <td>{color1}</td>
                                                    <td>{color}</td>
                                                </tr>
                                                <tr>
                                                    <td>{peculiarities1}</td>
                                                    <td>{peculiarities}</td>
                                                </tr>
                                                <tr>
                                                    <td>{country1}</td>
                                                    <td>{country}</td>
                                                </tr>
                                                <tr>
                                                    <td>{guarantee1}</td>
                                                    <td>{guarantee}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;