import styled from '@emotion/styled';
import { Link } from "react-router-dom";
export const LinkGoBack = styled(Link)`
display:block;
width:80px;
margin-bottom: 15px;
border: 1px solid black;
border-radius: 5px;
padding:5px;
color:black;
box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
text-decoration:none;
&:hover {
    color: white;
    background-color: #00afd1;
`;

export const Img = styled.img`
display:block;
margin-right:15px;
`;

export const H2 = styled.h2`
    margin-top:0px;
    width:250px;
   
`;

export const DivContainer = styled.div`
display:flex;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
`;

export const DivContent = styled.div`
padding-right: 15px;`;

