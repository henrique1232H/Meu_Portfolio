import * as Popover from '@radix-ui/react-popover';
import { useEffect, useState } from 'react';
import {GithubLogo, InstagramLogo, TwitchLogo, TwitterLogo, X} from "phosphor-react"

import "./style.css"

export function PopoverMenu() {

    const [user, setUser] = useState({})

    useEffect(() => {

        async function PegarInformacoes() {
          const response =  await fetch("https://api.github.com/users/henrique1232H");
          const data = await response.json()
          setUser({
            name: data.name,
            avatar: data.avatar_url,
            login: data.login,
            bio: data.bio,
            url: data.url,
            twitterName: data.twitter_username,
          })
        }

        PegarInformacoes()
    })

    return (
        <div>

            <Popover.Root className="root">
                <Popover.Trigger className='trigger'>
                    <h1>Perfil</h1>
                </Popover.Trigger>
                <Popover.Portal className='portal'>
                    
                    <Popover.Content className='content'>
                        
                        <div className='popoverFlex'>

                            <div className='popoverMain'>
                                <Popover.Close className='close'>
                                    <X 
                                    size={30}
                                    color="#000"/>
                                </Popover.Close>
                            </div>

                            <div className='popoverBody'>
                                
                                <img src={user.avatar} alt="foto de perfil do github" title='foto de perfil do github'/>
                                <h1> {user.name} </h1>
                                <h2> @{user.login} </h2>
                                <p> {user.bio} </p>
                            </div>

                            <div className='popoverSocial'>

                                <div className='socialFlex'>

                                    <a href="#">

                                    <InstagramLogo 
                                    size={30}
                                    color="#000"/>


                                    <h3>Instagram</h3>
                                    </a>

                                </div>

                                <div className='socialFlex'>

                                    <a href="">

                                        <GithubLogo 
                                        size={30}
                                        color="#000"/>

                                        <h3> {user.name} </h3>

                                    </a>

                                </div>

                                <div className='socialFlex'>

                                    <a href="#">

                                    <TwitterLogo 
                                    size={30}
                                    color="#000"/>
                                    
                                    <h3> {user.twitterName} </h3>

                                    </a>

                                </div>

                            </div>

                        </div>

                        <Popover.Arrow className='arrow' />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    )
}