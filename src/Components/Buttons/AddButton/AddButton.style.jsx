import styled from 'styled-components';
import * as color from '../../../styles/ColorPalette';

export const StyledButton = styled.button`
    width: auto;
    height: 40px;
    border: none;
    border-radius: 12px;
    padding: 16px 25px 16px 25px;
    display: block;
    background-color: ${color.nature};
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
    color: #FFFFFF;
    line-height: 1px;
`