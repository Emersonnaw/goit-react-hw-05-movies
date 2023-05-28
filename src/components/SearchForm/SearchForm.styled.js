import styled from '@emotion/styled';
import {Form, Field} from 'formik';

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormCastom = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    
`;

export const Button = styled.button`
     display: block;
    padding: 6px;
    margin-right:15px;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
   border-radius: 4px;
    cursor: pointer;
    outline: none;
    border:none;

  // &:active {
  //   color: white;
  //   background-color: #3498db;
  // }
   &:hover {
    
    color: white;
    background-color: #00afd1;
  }
`;


export const FieldCastom = styled(Field)`
    display: inline-block;
    margin-right:5px;
    width: 40%;
    height: 25px;
    font: inherit;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid #999;
    font-family: Georgia, serif;
    font-weight:500;
    
    outline: none;
    padding-left: 10px;
    padding-right: 4px;
    &::placeholder {
    padding-left:5px;
    font: inherit;
    font-size: 16px;
    font-family: cursive;
    }
    &:hover {
    border-color: #00afd1;
    }
`;
