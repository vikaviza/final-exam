import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan, faCarSide } from '@fortawesome/free-solid-svg-icons'
import {
    Earth,
    CarSpan,
    PalmSpan,
    StyledPalm,
    FooterContainer
} from './Footer.style';



const Footer = () => {
    return (
        <>  
            <Earth>
                <CarSpan>
                    <FontAwesomeIcon icon={faCaravan} />
                    <FontAwesomeIcon icon={faCarSide} />
                </CarSpan>
                <PalmSpan><StyledPalm /></PalmSpan>
            </Earth>
            <FooterContainer>



            </FooterContainer>
        </>
    )
};

export default Footer;