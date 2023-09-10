import React from 'react';
import { StyledBGImage } from './styles';
import { StyleSheetManager } from 'styled-components';


interface IProps {
    imgpath: string | undefined,

}

const BGImage = ({ imgpath }: IProps) => {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'imgpath'}>
            <StyledBGImage imgpath={imgpath} />
        </StyleSheetManager>
    );
};

export default BGImage;