import styled from '@emotion/styled';


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
width:80px;
`;

export const DivWrapper = styled.div`
 display: block;
position: relative;

 width:80px;
height:120px;
background-color:#B0C4DE;
`;

export const Span = styled.span`
dispaly: block;
position: absolute;
top:50%;
left:50%;
 transform: translate(-50%, -50%);
 font-family: serif;
 

 color:white;
`;
