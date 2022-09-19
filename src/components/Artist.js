import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import omega from "../assets/imagens/omega.png"
import axios from 'axios'
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from 'react'
import UserContext from "../assets/context/UserContext";




export default function Artist(){

    const { user } = useContext(UserContext);
    const {idArtista} = useParams();
    const [portfolio, setPortfolio] = useState([]);
    const [artist, setArtist] = useState({});

    
    useEffect(() =>{
    
        const requisicao = axios.get(
            `http://localhost:5000/portfolio/${idArtista}`,
        );

        requisicao.then((res) => 
            setPortfolio(res.data)
        );
    },[]);

    useEffect(() =>{
    
        const requisicao = axios.get(
            `http://localhost:5000/artist/${idArtista}`,
        );

        requisicao.then((res) => 
            setArtist(res.data)
        );
    },[]);


    function addtoChart(user,tatto){
        console.log(
            {
                id: user.id,
                artist: artist.name,
                photo: tatto.photo,
                price: tatto.price
            }
        )
    
        const requisicao = axios.post(
            `http://localhost:5000/cart`,
            {
                id: user.id,
                artist: artist.name,
                photo: tatto.photo,
                price: tatto.price
            }
        );
    }

    const avaliacoes = artist.star_1 + artist.star_2 + artist.star_3 + artist.star_4 + artist.star_5;
    const rating = (1*artist.star_1 + 2*artist.star_2 + 3*artist.star_3 + 4*artist.star_4 + 5*artist.star_5)/avaliacoes;
    
    return(
        <>
        <ArtistContainer>
            <Link1 to='/home'>
                <Logo>
                    <img src={omega}/>
                    <h1>mega Tattoos</h1>
                </Logo>
            </Link1>
            <ArtistArea>
                <img src="https://i.imgur.com/M6HnJwA_d.webp?maxwidth=760&fidelity=grand"/>
                <ArtistDescription>
                    <h1>Artista: {artist.name}</h1>
                    <h1>{artist.description}</h1>
                    <h1>Especialidade: {artist.specialty}</h1>
                    <h1> {rating.toFixed(2)}/5  {avaliacoes} Avaliações </h1>
                </ArtistDescription>
            </ArtistArea>
            <PortfolioArea>
                {portfolio.length?

                    portfolio.map((tatto) => 
                        <Product>
                            <img src={tatto.photo}/>
                            <h1>R$ {(tatto.price/100).toFixed(2)}</h1>
                            <button onClick={()=> addtoChart(user,tatto)}>Adicionar no carrinho</button>
                        </Product>
                    )
                    :"Não tem tatuagem aqui"
                }
               
            </PortfolioArea>

            
        </ArtistContainer>
        <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>
        </>

    )
}

const Link1 = styled(Link)`
    text-decoration: none;

`

const ArtistContainer = styled.div`
    background: #000;
    min-height: 637px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;       

    h2 {
    width: 285px;
    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    text-align: center;    
    color: white;
    cursor: pointer;
    }

`
const Logo = styled.div`   
    
    height: 70px;
    box-sizing: border-box;
    display: flex;    
    align-items: center;
   
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

const ArtistArea = styled.div`
    margin-top: 30px;
    display: flex;
    width: 375px;

    h1{
        color: white;
    }

    img{
        height: 200px;
        width: 200px;
        margin-right: 5px;
        box-sizing: border-box;
    }

`
const ArtistDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const PortfolioArea = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
`

const Product = styled.div`
    margin-top: 30px;
  
    img{
        border-radius: 5px;
        width: 150px;
        height: 150px;
    }

    h1{
        color: white;
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