import React, { useEffect, useState } from 'react';
import { InputSearch, InputSearchConatiner, SearchList } from './styles';

interface IProps {
    onSearch: (query: string) => void;
    results?: any[];
}

const SearchInput = ({ onSearch, results }: IProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };


    useEffect(() => {
        onSearch(query);
    }, [onSearch, query])

    return (
        <InputSearchConatiner>
            <InputSearch
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            <SearchList>
                {
                    results
                }
            </SearchList>
        </InputSearchConatiner>
    );
};

export default SearchInput;