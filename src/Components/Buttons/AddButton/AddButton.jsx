import React from 'react';
import { StyledButton, ButtonText } from './AddButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddButton = () => {
    return (
        <div>
            <StyledButton>
                <ButtonText>ADD NEW CLIENT</ButtonText>
                <FontAwesomeIcon icon={faPlus} style={{color: 'white', paddingLeft: '10px', fontSize: '20px'}} />
            </StyledButton>
        </div>
    );
};

export default AddButton;