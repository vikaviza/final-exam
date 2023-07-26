import styled from 'styled-components';
import * as color from '../../../styles/ColorPalette';

export const StyledButton = styled.button`
    width: auto;
    height: auto;
    border: none;
    border: 1px solid black;
    border-radius: 12px;
    padding: 5px;
    background-color: ${color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-flex;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonText = styled.p`
    width: auto;
    font-size: 18px;
    font-weight: 800;
    color: #000000;
    line-height: 1px;
`