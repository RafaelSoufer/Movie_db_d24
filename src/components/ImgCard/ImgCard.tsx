import React from 'react';
import { CardImg, Conatiner, Content } from './styles';



interface IProps {
    imageUrl: string,
    title: string,
    description?: string
}

const ImageCard = ({ imageUrl, title }: IProps) => {
    return (
        <Conatiner >
            <CardImg src={imageUrl} alt={title} />
            <Content>
                <p>{title}</p>
            </Content>
        </Conatiner>
    );
};

export default ImageCard;