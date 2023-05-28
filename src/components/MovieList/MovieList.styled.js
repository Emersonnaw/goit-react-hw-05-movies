import styled from '@emotion/styled';
import { Link } from "react-router-dom";


export const LinkStile = styled(Link)`
text-decoration:none;
`;



export const Container = styled.div`
display:flex;

box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
`;


export const Ul = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const Img = styled.img`
display:block;
width:220px;
height: 330px;
`;

export const DivWrapper = styled.div`
display:inline-block;
position: relative;
width:220px;
height:330px;
background-color:#B0C4DE;
`;

export const Span = styled.span`
dispaly: block;
position: absolute;
top:50%;
left:50%;
 transform: translate(-50%, -50%);
 font-family: serif;
 font-size:24px;

 color:white;
`;
