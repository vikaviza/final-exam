import React from 'react';
import { StyledButton, ButtonText } from './EditButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const EditButton = () => {
    return (
        <div>
            <StyledButton>
                <ButtonText>Edit</ButtonText>
                <FontAwesomeIcon icon={faPen} style={{color: '#FEDC56', paddingLeft: '10px', fontSize: '20px'}} />
            </StyledButton>
        </div>
    );
};

export default EditButton;