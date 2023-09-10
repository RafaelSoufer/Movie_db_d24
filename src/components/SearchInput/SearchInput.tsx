import React, { useEffect, useState } from 'react';
import { Conatiner, IconContainer, InputSearch, InputSearchConatiner, SearchList, CloseContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faClose } from '@fortawesome/free-solid-svg-icons';
import { TailSpin } from 'react-loader-spinner'


interface IProps {
    onSearch: (query: string) => void;
    results?: any[];
    isLoading?: boolean;
    noResultsTxt?: string;
}



const SearchInput = ({ onSearch, results, isLoading, noResultsTxt }: IProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        onSearch(query);
    }, [onSearch, query])

    const handleClose = () => {
        setQuery('')
    }

    return (
        <Conatiner>
            <InputSearchConatiner>
                <IconContainer>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color='white' size='xl' />
                </IconContainer>
                <InputSearch
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    hasQuery={query.length > 0}
                />
                {query
                    &&
                    <CloseContainer>
                        {isLoading
                            ?
                            <TailSpin
                                height="30"
                                width=""
                                color="white"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                            :
                            <FontAwesomeIcon icon={faClose} color='white' size='xl' onClick={handleClose} />}
                    </CloseContainer>
                }
            </InputSearchConatiner>
            {query &&
                <SearchList>
                    {
                        results && results.length > 0 ? results : [<li>{noResultsTxt}</li>]
                    }
                </SearchList>}
        </Conatiner>
    );
};

export default SearchInput;