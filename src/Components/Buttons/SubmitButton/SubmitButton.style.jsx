import styled from 'styled-components';
import * as color from '../../../styles/ColorPalette';


export const StyledButton = styled.button`
    width: auto;
    height: auto;
    border: 1px solid black;
    border-radius: 12px;
    padding: 10px;
    background-color: ${color.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    margin-top: 10px;
    &:hover {
        cursor: pointer;
    }
`

export const ButtonText = styled.p`
    width: auto;
    font-size: 35px;
    font-weight: 800;
    color: #000000;
    line-height: 1px;
`