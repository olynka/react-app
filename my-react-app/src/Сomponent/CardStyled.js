import styled from "styled-components";
export const Blockquote = styled.div`
  font-size: 1.4em;
  width:60%;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #78C0A8 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;

  ::after{
  content: '';
}

`
export const Button = styled.button`
 display: inline-flex;
 justify-content:center;
    margin: 10px;
    text-decoration: none;
    position: relative;
    font-size: 20px;
    line-height: 20px;
    padding: 12px 30px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', Тahoma, sans-serif;
    background: #808080;
    cursor: pointer;
    border: 2px solid #BFE2FF;
    outline: 1px solid;
    outline-color: #337AB7;
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1); 




`

