import styled from 'styled-components';
import * as color from '../../styles/ColorPalette';

export const Sky = styled.div`
    background: ${color.primary};
    height: 15px;
`;

export const NavContainer = styled.div`
    background: ${color.secondary};
    display: flex;
    justify-content: space-between;
    padding-inline: 35px;
    border-bottom: 1px solid black;
`;

export const Brand = styled.div`
    font-family: 'Ysabeau SC', sans-serif;
    color: white;
    font-size: 35px;
    min-width: 260px;
`;

export const Contact = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const ContactText = styled.p`
    color: white;
    font-size: 16px;
`;

export const PhoneNumber = styled.p`
    font-size: 24px;
    font-weight: 500;
`;