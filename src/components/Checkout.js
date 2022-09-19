import { useNavigate } from "react-router-dom";
import {useEffect, useContext, useState} from "react"
import UserContext from "../assets/context/UserContext";
import axios from "axios";

import styled from "styled-components";
import omega from "../assets/imagens/omega.png"


export default function Checkout() {

    const navigate = useNavigate();
    const { user, counter, setCounter} = useContext(UserContext);
    const [cart, setCart] = useState([]);
    const [balance, setBalance] = useState(0);

    // map com os pedidos efetuados
    // deletar pedidos: <ion-icon name="trash-outline" color="black"></ion-icon>
    
    useEffect(() =>{
    
        const requisicao = axios.get(
            `http://localhost:5000/cart/${user.id}`,
        );

        const sum = (cart.reduce((accumulator, product) => {
            return accumulator + product.price;
        }, 0))
    
        setBalance(sum/100);
    
        requisicao.then((res) =>{
            setCart(res.data)
          
        }
        );
    },[cart]);
   

    function deleteItem(productId){
        const requisicao = axios.delete(
            `http://localhost:5000/cart/${productId}`,
        );

        requisicao.then(() => {

            const requisicao = axios.get(
                `http://localhost:5000/cart/${user.id}`,
            );
    
            requisicao.then((res) => 
                setCart(res.data)
            );
        });

    }

    function checkout(userId){
        const requisicao = axios.delete(
            `http://localhost:5000/checkout/${userId}`,
        );

        requisicao.then(() => {
            alert("Pedido realizado com sucesso!\nEnviaremos mais informações sobre como prosseguir a compra no  seu email.")
            const requisicao = axios.get(
                `http://localhost:5000/cart/${user.id}`,
            );
    
            requisicao.then((res) => 
                setCart(res.data)
            );
        });

    }

   


    return (
        <>
            <Screen1>
                <Logo>
                    <img alt="" src={omega}></img>
                    <h1>mega Tattoos</h1>
                </Logo>
                <Cart>
                    {cart.length?
                        cart.map((produto) => 
                            <div className="tattoo">
                                <img alt="" src={produto.photo}></img>
                                <div className="tattooInfo">
                                    <p>Tatuador: {produto.artist}</p>
                                    <p>Preço: R$ {produto.price/100}</p>
                                    <ion-icon name="trash-outline" color="danger" onClick={() => deleteItem(produto._id)}></ion-icon>
                                </div>
                            </div> 
                        
                        )
                        
                        :<h1>Não tem nada no cart!</h1>

                    }
                    
                </Cart>

                <Balance>
                    <p>Valor Total: R$ {balance}</p>
                </Balance>
                <Buttons>
                    <Button1 onClick={() => { navigate("/home"); }}>Home</Button1>
                    <Button2 onClick={() => checkout(user.id) } >Confirmar</Button2>
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
    padding-top: 15px;
    box-sizing: border-box;

    background: transparent;
    border-width: 2px;
    border-color: #fff;
    border-radius: 2px;
    overflow-y: auto;
    
    
    .tattoo {

        border: 1px solid white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 5px;

        img {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        object-fit: cover;
        }

        p {
            color: white;
            font-family: 'Marcellus', sans-serif;
            font-size: 15px;
        }

    }
   
`

const Balance = styled.div`
    width: 300px;
    margin: 10px 0px;

    p {
        color: white;
        font-family: 'Marcellus', sans-serif;
        font-size: 15px;
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