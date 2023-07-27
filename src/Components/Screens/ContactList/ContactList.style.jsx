import styled from 'styled-components';
import * as color from '../../../styles/ColorPalette';
import { devices } from "../../../styles/QuariesBreakpoints"

export const ContactContainer = styled.section`
    min-height: calc(100vh - 345px);  
    display: block;
`;

export const ContactSearch = styled.section`
`;

export const AddContainer = styled.div`
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    margin: 25px 35px 0 25px;
`;

export const About = styled.div`
    min-width: 300px;
    max-width: 560px;
    font-size: 14px;
    margin-right: 50px
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: -30px 35px 80px 35px;
`;

export const SearchInput = styled.input`
    width: auto;
    height: 40px;
    border: 5px solid black;
    border-radius: 12px;
    padding: 16px 25px 16px 25px;
    font-weight: 800;
`;

export const ContactListSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    @media only screen and ${devices.xl} {
        
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto;
    }
`;

export const ClientCard = styled.div`
    background-color: ${color.secondary};
    border-radius: 0 12px;
    height: 120px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 12px 12px 4px ${color.darkGreen};
`;

export const ClientUl = styled.ul`
    list-style: none;
    border-top: 1px solid ${color.darkGreen};
    border-radius: 0 12px 0 0;
    font-weight: 400;
`;

export const ClientListItem = styled.li`
    border-bottom: 1px solid ${color.darkGreen};
    font-family: 'Ysabeau SC', sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    padding-inline: 10px;
`;

export const ClientSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    text-align: left;
    min-width: 110px;
`;

export const ClientButtons = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px;
`;