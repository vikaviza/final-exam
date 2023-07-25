import React from 'react';
import { StyledButton, ButtonText } from './AddButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddButton = () => {
    return (
        <div>
            <StyledButton>
                <ButtonText>ADD</ButtonText>
                <FontAwesomeIcon icon={faPlus} style={{color: 'white', paddingLeft: '3px'}} />
            </StyledButton>
        </div>
    );
};

export default AddButton;