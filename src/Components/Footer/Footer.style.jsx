import styled from 'styled-components';
import { ReactComponent as PalmTree } from '../../addons/images/palm-tree.svg'

export const Earth = styled.div`
    position: sticky;
    bottom: 45px;
    width: 100%;
    max-width: 1920px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
`;

export const CarSpan = styled.span`
    font-size: 80px;
    gap: -10px;
    color: #2D2424;
    display: flex;
    flex-wrap: nowrap;
`;

export const StyledPalm = styled(PalmTree)`
    height: 200px;
    width: auto;
    margin-bottom: -15px;
`;

export const PalmSpan = styled.span`
    
`;

export const FooterContainer = styled.div`
    position: sticky;
    bottom: -15px;
    width: 100%;
    max-width: 1920px;
    height: 70px;
    background: #2D2424;
    box-shadow: 0px -10px 15px 6px #2D2424;
    display: flex;
    justify-content: space-between;
    padding-inline: 35px;
    border-bottom: 1px solid black;
`;