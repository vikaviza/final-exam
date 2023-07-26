import React from 'react';
import { StyledButton, ButtonText } from './ViewButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const ViewButton = () => {
    return (
        <div>
            <StyledButton>
                <ButtonText>View</ButtonText>
                <FontAwesomeIcon icon={faEye} style={{color: '#1AA7EC', paddingLeft: '10px', fontSize: '20px'}} />
            </StyledButton>
        </div>
    );
};

export default ViewButton;