import React from 'react';
import { StyledButton, ButtonText } from './SubmitButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SubmitButton = () => {
    return (
        <>
            <StyledButton>
                <ButtonText>Submit</ButtonText>
                <FontAwesomeIcon icon={faCheck} style={{color: '#F3E8EA', paddingLeft: '10px', fontSize: '30px'}} />
            </StyledButton>
        </>
    );
};

export default SubmitButton;