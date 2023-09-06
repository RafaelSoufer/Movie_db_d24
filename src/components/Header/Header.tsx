import React from 'react';
import {
    HeaderContainer,
    HeaderContent,
    Logo,
    LogoContainer,
} from './styles';

function Header() {

    return (

        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <Logo src={require('../../assets/logo.png')} alt='logo' />
                </LogoContainer>
            </HeaderContent>
        </HeaderContainer>
    );
}

export default Header;
