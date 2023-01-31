import "./style.css"
import { useState, useEffect } from "react"



export function Main() {

    const [user, setUser] = useState({})

    useEffect(() => {
  
      async function PegarValores() {
         const informations = await fetch("https://api.github.com/users/henrique1232H")
         const data = await informations.json();
  
         
         setUser({
          name: data.name,
          login: data.login,
          twitter: data.twitter_username,
          bio: data.bio,
          avatar: data.avatar_url
  
         })
      }
  
  
      PegarValores()
    }, [])
  


    return (

        <div className="mainGrid">

            <div className="mainText">
                <h1>Bem Vindos ao meu Portfolio</h1>
                <p>Vamos conhecer meus projeto</p>

                <button>Vamos lá</button>

            </div>

            <figure>

                <img src={user.avatar} alt="Foto" title="Foto" />

            </figure>
            
           

        </div>
    )
}