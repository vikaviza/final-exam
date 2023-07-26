import React from 'react';
import { StyledButton, ButtonText } from './DeleteButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteButton = () => {
    return (
        <>
            <StyledButton>
                <ButtonText>Delete</ButtonText>
                <FontAwesomeIcon icon={faTrash} style={{color: '#F3E8EA', paddingLeft: '10px', fontSize: '20px'}} />
            </StyledButton>
        </>
    );
};

export default DeleteButton;