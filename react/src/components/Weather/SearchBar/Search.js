import axios from 'axios';
import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_OPTIONS, GEO_API_URL } from '../Api';
import SearchStyle from './Search.module.css'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return axios.get(
            `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
            GEO_API_OPTIONS
        )
            .then((response) => response.data)
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <div className={SearchStyle.search_box}>
            <AsyncPaginate
                className={SearchStyle.search_bar}
                placeholder="Wyszukaj miasto..."
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    );
};

export default Search;
