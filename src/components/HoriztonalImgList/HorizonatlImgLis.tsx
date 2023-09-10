import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Title } from './styles';

interface IProps {
    children: ReactNode;
    title: string;
}

const HorizonatlImgList = ({ children, title }: IProps) => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    };

    return (
        <Container>
            <Title>{title}</Title>
            <Slider {...settings}>{children}</Slider>
        </Container>
    );
};

export default HorizonatlImgList;