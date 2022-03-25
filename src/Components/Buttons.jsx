import style from "styled-components";


const Button = style.button`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    margin: 1%;
    border: ${(props) => props.border};
    cursor: pointer;
    width: 150px;
    height: 50px;
    font-size: 20px

`

export default Button;