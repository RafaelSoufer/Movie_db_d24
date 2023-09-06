import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getMoviesAction } from '../redux/movies/moviesSlice';
import { moviesRequestSelector, moviesSelector } from '../redux/movies/selectors';
import { Container, BGImage, Content } from './styles';
import { REQUEST_STATUS } from '../redux/general';
import Header from '../components/Header/Header';




function MainScreen() {

    const dispatch = useAppDispatch();
    const movieList = useSelector(moviesSelector).results;
    const requestStatus = useSelector(moviesRequestSelector);
    const isLoading = requestStatus.GET_MOVIES === REQUEST_STATUS.PENDING
    const [imagePath, setImagePath] = useState<string>('')


    useEffect(() => {
        dispatch(getMoviesAction())
    }, [dispatch])

    useEffect(() => {
        if (requestStatus.GET_MOVIES === REQUEST_STATUS.SUCCESS) {
            setImagePath(movieList[3].poster_path)
        }
        else setImagePath('')
    }, [movieList, requestStatus.GET_MOVIES])


    return (
        <>
            <Header />
            <Container>
                <Content>
                    <ul>
                        {movieList.map(movie => <li key={movie.id}>{movie.title}</li>)}
                    </ul>
                </Content>
                <BGImage imgPath={imagePath} />
            </Container>
        </>
    );
}

export default MainScreen;
