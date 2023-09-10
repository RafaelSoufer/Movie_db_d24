import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getMovieDatail, getMoviesAction, getSearchMovieByTitle, moviesActions } from '../redux/movies/moviesSlice';
import { movieDetailSelector, movieSearchByTitleSelector, moviesRequestSelector, moviesSelector } from '../redux/movies/selectors';
import { Container, BGImage, Content, MovieInfoContainer, MovieTitle, MovieDescription } from './styles';
import { REQUEST_STATUS } from '../redux/general';
import Header from '../components/Header/Header';
import { IMovieDetail, IMovieResult, IMovieSearch } from '../api/moviesRequests';
import { EMPTY_MOVIE } from '../utils';
import SearchInput from '../components/SearchInput/SearchInput';
import { useDebounce } from '../hooks/useDebounce';
import ImageCard from '../components/ImgCard/ImgCard';
import { IMAGES_BASE_URL } from '../api/API';
import HorizonatlImgList from '../components/HoriztonalImgList/HorizonatlImgLis';
import { TailSpin } from 'react-loader-spinner';






function MainScreen() {

    const dispatch = useAppDispatch();
    const moviesList = useSelector(moviesSelector).results;
    const movieDetail = useSelector(movieDetailSelector)
    const searchedMovies = useSelector(movieSearchByTitleSelector).results || []
    const requestStatus = useSelector(moviesRequestSelector);

    const [query, setQuery] = useState('')
    const debouncedValue = useDebounce(query, 600)


    const isLoading = requestStatus.GET_MOVIES === REQUEST_STATUS.PENDING
        || requestStatus.GET_MOVIE_DETAIL === REQUEST_STATUS.PENDING

    const isSearching = requestStatus.GET_SEARCH_BY_TITLE === REQUEST_STATUS.PENDING

    const [mainMovie, setMainMovie] = useState<IMovieResult>(EMPTY_MOVIE)
    const [selectedMovie, setSelectedMovie] = useState<IMovieSearch>()

    const { poster_path, title, id, vote_count } = mainMovie as IMovieResult
    const { overview } = movieDetail as IMovieDetail

    useEffect(() => {
        dispatch(getMoviesAction())
    }, [dispatch])

    const handleSearch = (query: string) => {
        setQuery(query)
    }

    useEffect(() => {
        debouncedValue && dispatch(getSearchMovieByTitle({ query: debouncedValue }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue, dispatch])


    useEffect(() => {
        if (requestStatus.GET_MOVIES === REQUEST_STATUS.SUCCESS) {
            setMainMovie(moviesList[0])
            dispatch(moviesActions.resetRequestStatus('GET_MOVIES'))
            id && dispatch(getMovieDatail({ id }));
        }
    }, [dispatch, id, moviesList, requestStatus.GET_MOVIES])

    const handleMovieOption = (movie: IMovieSearch) => {
        setSelectedMovie(movie)
        setMainMovie({} as IMovieResult)
    }


    return (
        <>
            <Header />
            <Container>
                <BGImage imgpath={poster_path || selectedMovie?.poster_path || undefined} />
                <SearchInput
                    onSearch={handleSearch}
                    results={query ? searchedMovies.map(movie => <li key={movie.id} onClick={() => handleMovieOption(movie)}>{movie.title}</li>) : []}
                    isLoading={isSearching}
                    noResultsTxt='No results :('
                />
                {isLoading ?
                    <TailSpin
                        height="50"
                        width=""
                        color="white"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        visible={true}
                    />
                    :
                    <>
                        <Content>
                            <MovieInfoContainer>
                                <MovieTitle>{selectedMovie?.title || title}</MovieTitle>
                                <MovieDescription> {selectedMovie?.vote_count || vote_count} </MovieDescription>
                                <MovieDescription> {selectedMovie?.overview || overview} </MovieDescription>
                            </MovieInfoContainer>
                            <HorizonatlImgList title='Popular and Trending'>
                                {moviesList.map(image => <ImageCard imageUrl={`${IMAGES_BASE_URL}${image.poster_path}`} title={image.title} />)}
                            </HorizonatlImgList>
                        </Content>
                    </>
                }
            </Container>
        </>
    );
}

export default MainScreen;
