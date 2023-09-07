import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getMovieDatail, getMoviesAction, getSearchMovieByTitle, moviesActions } from '../redux/movies/moviesSlice';
import { movieDetailSelector, moviesRequestSelector, moviesSelector } from '../redux/movies/selectors';
import { Container, BGImage, Content, MovieInfoContainer, MovieTitle, MovieDescription } from './styles';
import { REQUEST_STATUS } from '../redux/general';
import Header from '../components/Header/Header';
import { IMovieDetail, IMovieResult } from '../api/moviesRequests';
import { EMPTY_MOVIE } from '../utils';





function MainScreen() {

    const dispatch = useAppDispatch();
    const moviesList = useSelector(moviesSelector).results;
    const movieDetail = useSelector(movieDetailSelector)
    const requestStatus = useSelector(moviesRequestSelector);
    const isLoading = requestStatus.GET_MOVIES === REQUEST_STATUS.PENDING
    const [mainMovie, setMainMovie] = useState<IMovieResult>(EMPTY_MOVIE)
    const { poster_path, title, id } = mainMovie as IMovieResult
    const { overview, tagline } = movieDetail as IMovieDetail

    useEffect(() => {
        dispatch(getMoviesAction())
        dispatch(getSearchMovieByTitle({query:'Simone'}))
    }, [dispatch])

    useEffect(() => {
        if (requestStatus.GET_MOVIES === REQUEST_STATUS.SUCCESS) {
            setMainMovie(moviesList[0])
            id && dispatch(getMovieDatail({ id }));
        }
        else setMainMovie(EMPTY_MOVIE)
    }, [dispatch, id, moviesList, requestStatus.GET_MOVIES])



    return (
        <>
            <Header />
            <Container>
                {moviesList.length > 0 && <>
                    <Content>
                        <MovieInfoContainer>
                            <MovieTitle>{title}</MovieTitle>
                            <MovieDescription> {tagline} </MovieDescription>
                            <MovieDescription> {overview} </MovieDescription>
                        </MovieInfoContainer>
                    </Content><BGImage imgpath={poster_path} />
                </>
                }
            </Container>
        </>
    );
}

export default MainScreen;
