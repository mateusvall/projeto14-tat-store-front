import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import omega from "../assets/imagens/omega.png"

export default function Checkout() {

    const navigate = useNavigate();

    // map com os pedidos efetuados
    // deletar pedidos
    // botao de confirmar pedido
    // atalho de voltar ao home

    return (
        <>
            <Screen1>
                <Logo>
                    <img alt="" src={omega}></img>
                    <h1>mega Tattoos</h1>
                </Logo>
                <Cart>

                </Cart>
                <Buttons>
                    <Button1 onClick={() => { navigate("/home"); }}>Home</Button1>
                    <Button2 >Confirmar</Button2>
                </Buttons>
            </Screen1>
            <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>
        </>

    )
}

const Screen1 = styled.div`
    background: #000;
    height: 637px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Logo = styled.div`   
    
    height: 70px;
    box-sizing: border-box;
    display: flex;    
    align-items: center;
    justify-content: center ;
   
    h1 {
    font-family: 'IM Fell DW Pica SC', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;    
    text-align: center;
    color: white;
    padding-top: 26px;    
    box-sizing: border-box;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 3px;
        box-sizing: border-box;
    }
`

const Cart = styled.div`
    width: 326px;
    height: 446px;
    margin-top: 8px;
    margin-bottom: 12px;
    box-sizing: border-box;

    background: white;
    border-width: 2px;
    border-color: #fff;
    border-radius: 2px;
    
    .badge:after{
        content:attr(value);
        font-size:12px;
        color: #fff;
        background: red;
        border-radius:50%;
        padding: 0 5px;
        position:relative;
        
        opacity:0.9;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 330px;
`

const Button1 = styled.button`
        display: flex;
        width: 150px;
        height: 45px;        
        
        font-style: normal;
        font-weight: 400;        
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 25px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        align-items: center;
        justify-content: center;

        border-style: solid;
        border-width: 1px;
        border-color: #fff;
        background-color: transparent;       
        font-family: 'Marcellus', sans-serif;
        color: #fff;
        font-size: 14px;
        line-height: 1em;
        letter-spacing: 3.36px;
        text-transform: uppercase;

        &:disabled{
            opacity: 0.7;
        }
`

const Button2 = styled.button`
        display: flex;
        width: 150px;
        height: 45px;        
        
        font-style: normal;
        font-weight: 400;        
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 25px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        align-items: center;
        justify-content: center;

        border-style: solid;
        border-width: 1px;
        border-color: #fff;
        background-color: white;       
        font-family: 'Marcellus', sans-serif;
        color: #000;
        font-size: 14px;
        line-height: 1em;
        letter-spacing: 3.36px;
        text-transform: uppercase;

        &:disabled{
            opacity: 0.7;
        }
`

const Footer = styled.div`
    width: 375px;
    height: 30px;
    background: #000;
    display: flex;    
    align-items: center;
    justify-content: center; 

    h3{
    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 17px;
    text-align: center;    
    color: white;   
    }
`