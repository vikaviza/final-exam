import React from 'react';
import { StyledButton, ButtonText } from './CloseButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CloseButton = () => {
    return (
        <>
            <StyledButton>
                <ButtonText>Close</ButtonText>
                <FontAwesomeIcon icon={faXmark} style={{color: '#F3E8EA', paddingLeft: '10px', fontSize: '30px'}} />
            </StyledButton>
        </>
    );
};

export default CloseButton;