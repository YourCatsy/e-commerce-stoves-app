import React, { useContext } from 'react';
import { BiSort, BiFilterAlt } from 'react-icons/bi';
import filtersContext from '../../contexts/filters/filtersContext';
import FilterBarOptions from './FilterBarOptions';

const FilterBar = () => {

    const { handleMobSortVisibility, handleMobFilterVisibility } = useContext(filtersContext);

    return (
        <>
            <aside id="filterbar">
                <div className="filterbar_wrapper">
                    <FilterBarOptions />
                </div>
            </aside>
            <div id="filterbar_mob">
                <div className="filterbar_mob_wrapper">
                    <h3
                        className="title"
                        onClick={() => handleMobSortVisibility(true)}
                    >
                        <BiSort />
                        <span>Cортировать</span>
                    </h3>
                    <span>|</span>
                    <h3
                        className="title"
                        onClick={() => handleMobFilterVisibility(true)}
                    >
                        <BiFilterAlt />
                        <span>Фильтровать</span>
                    </h3>
                </div>
                <FilterBarOptions />
            </div>
        </>
    );
};

export default FilterBar;