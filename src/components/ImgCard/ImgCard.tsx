import React from 'react';
import { Conatiner, Content } from './styles';



interface IProps {
    imageUrl: string,
    title: string,
    description?: string
}

const ImageCard = ({ imageUrl, title }: IProps) => {
    return (
        <Conatiner >
            <img src={imageUrl} alt={title} height={230} />
            <Content>
                <p>{title}</p>
            </Content>
        </Conatiner>
    );
};

export default ImageCard;