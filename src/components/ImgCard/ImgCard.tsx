import React from 'react';
import { CardImg, Conatiner, Content, Text } from './styles';



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
                <Text>{title}</Text>
            </Content>
        </Conatiner>
    );
};

export default ImageCard;