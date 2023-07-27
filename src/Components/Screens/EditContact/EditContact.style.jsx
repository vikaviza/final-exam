import styled from 'styled-components';
import * as color from '../../../styles/ColorPalette';

export const EditContactSection = styled.section`
    min-height: calc(100vh - 320px);
`;

export const EditformContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 160px;
`;

export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30rem;
    height: 30rem;
    padding: 40px;
    background: ${color.nature};
    border-radius: 12px;
`;

export const EditInput = styled.input`
    width: auto;
    height: 40px;
    border: 5px solid black;
    border-radius: 12px;
    padding: 16px 25px 16px 25px;
    font-weight: 800;
`;

export const EditButtonContainer = styled.div`
    display:flex;
    justify-content: space-around;
`;