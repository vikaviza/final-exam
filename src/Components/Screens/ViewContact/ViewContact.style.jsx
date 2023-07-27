import styled from 'styled-components';
import * as color from '../../../styles/ColorPalette';

export const ViewContactSection = styled.section`
    min-height: calc(100vh - 320px);
    overflow: clip;
    display: flex;
    flex-direction: column;
    
    align-items: center;
`;

export const ViewSky = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #2D2424;
`;

export const CloudSpan = styled.span`
    display: flex;
    justify-content: space-between;
    width: 40vw;
    font-size: 80px;
`;

export const CloudSunSpan = styled.span`
    font-size: 120px;
    padding-bottom: 25px;
`;

export const ViewContactCard = styled.div`
    background-color: ${color.secondary};
    border-radius: 0 12px;
    min-height: 30vh;
    min-width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${color.darkGreen};
    font-size: 40px;
    margin-bottom: 6rem;
`;

export const ViewContactUl = styled.ul`
    list-style: none;
    border-radius: 0 12px 0 0;
`;

export const ViewContactli = styled.li`
    border-bottom: 1px solid ${color.darkGreen};
    font-family: 'Ysabeau SC', sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    padding-inline: 10px;
`;

export const ViewContactSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    text-align: left;
    min-width: 300px;
`;