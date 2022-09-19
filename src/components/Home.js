import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../assets/context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import omega from "../assets/imagens/omega.png"
import { icons, tattoos } from "../assets/Images";

export default function Home() {

    const navigate = useNavigate();

    // const { user } = useContext(UserContext);
    // <img alt="" src={exit} onClick={() => { setUser(null); navigate("/"); }}></img>

    // ion icons
    // lixo: <ion-icon name="trash-outline"></ion-icon>
    // cart: <ion-icon name="cart-outline"></ion-icon>

    const user = { name: "Matheus" }

    const [artists, setArtists] = useState([]);

    useEffect(() =>{
    
        const requisicao = axios.get(
            `http://localhost:5000/artist`,
        );

        requisicao.then((res) => 
            setArtists(res.data)
        );
    },[]);

    return (<>
        <Screen1>
            <Logo>
                <img alt="" src={omega}></img>
                <h1>mega Tattoos</h1>
            </Logo>
            <UserBar>
                <>
                    <h5>Bem-vindo(a), {user.name}!</h5>
                </>
                <>
                    <ion-icon name="cart-outline" color="light" onClick={() => { navigate("/checkout"); }}></ion-icon>
                    <ion-icon name="exit-outline" color="light" onClick={() => { navigate("/"); }}></ion-icon>
                </>
            </UserBar>

            <Intro>
                <p><strong>Omega Tattoos</strong> é um estúdio de tatuagens onde você pode explorar e decidir fazer quantas tatuagens quiser, todas com um preço fixo e dividida por especialidades dos nossos tatuadores!</p>
            </Intro>

            <Slideshow>
                <div className="slide-container">
                    <Fade>
                        {tattoos.map((fadeImage, index) => (
                            <div className="each-fade" key={index}>
                                <div className="image-container">
                                    <img alt="" src={fadeImage.photo} />
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </Slideshow>

            <h2>Escolha seu estilo:</h2>

            <Body>
                {artists.length?

                    artists.map((artist) => 
                        <Link1 to={`/artist/${artist.id}`}>
                            <div className="artist">
                                <img alt="" src={artist.icon}/>
                                <h1>{artist.specialty}</h1>
                            </div>
                        </Link1>
                    )
                   
                :"Não tem artista nenhum"
                }
               
            </Body>

            <h3>Em Breve:</h3>
            <h4>Piercings e Modificações Corporais</h4>

        </Screen1>
        <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>

    </>)
};

const Link1 = styled(Link)`
    text-decoration: none ;
`

const Screen1 = styled.div`
    
    background: #000;
    height: 637px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .buttons {
        height: 50px;
        width: 317px;
        margin: 5px 0px;
        box-sizing: border-box;
        display: flex;        
        justify-content: space-between;
    }

    h2 {
    width: 330px;
    margin: 8px 0px;
    box-sizing: border-box;

    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;    
    color: white;
    }

    h3 {
    width: 330px;
    margin: 8px 0px;
    box-sizing: border-box;

    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;    
    color: white;
    }

    h4 {
    width: 330px;
    margin: 8px 0px;
    box-sizing: border-box;

    font-family: 'IM Fell DW Pica SC', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 17px;
    text-align: center;    
    color: white;
    }

    
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

const UserBar = styled.div`
    height: 32px;
    width: 375px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;    
    padding: 0px 8px;

    ion-icon {
        width: 28px;
        height: 28px;
    }

    #notification-button {            
            position: relative;
            background-color: black;
            width: 42px;            
            overflow: visible!important;
    }


   #notifications-badge {
            background-color: red;
            position: absolute;
            top: -3px;
            right: -3px;
            border-radius: 100%;
    }

    h5 {
    padding-right: 35px;
    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 17px;
    text-align: left;    
    color: #797979;
    }
`

const Intro = styled.div`

    height: 90px;
    width: 330px;
    display: flex;    
    align-items: center;
    justify-content: center;

    p {            
        font-family: 'Marcellus', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        text-align: justify;    
        color: white;
    }
`

const Slideshow = styled.div`

    height: 170px;
    width: 330px;     
    margin: 5px 0px;
    box-sizing: border-box;        

    img { 
    height: 170px;
    width: 330px;
    object-fit: cover;
    opacity: 0.6;    
    border-radius: 8px;      
    }
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

const Body = styled.div`

    height: 110px;
    width: 350px;
    display: flex;
    align-items: center;    

    .artist {        

        display: flex;
        flex-direction: column;
        align-items: center;       

        h1 {
            margin-top: 5px;
            box-sizing: border-box;
            font-family: 'Marcellus', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 17px;
            text-align: center;    
            color: white;
        }
    }

    img {
        width: 60px;
        height: 60px;
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