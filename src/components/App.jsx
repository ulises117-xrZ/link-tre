
import React from 'react'
import UserProfile from './profile/userProfile'
import ItemsLink from './treeItems/item'
import './app.css';
function App(){
    return(
        <div className="App-container">
                <UserProfile 
                    username="mark"
                    image = "https://www.prensalibre.com/wp-content/uploads/2021/04/zac-nueva.png?quality=82&w=631&h=430&crop=1"
                />
                <ItemsLink />
                <ItemsLink 
                    nombreRedSocial = "Youtube"
                    enlace = "https://www.youtube.com"                
                />
                <ItemsLink 
                    nombreRedSocial = "Github"
                    enlace = "https://github.com"
                />
                <ItemsLink 
                    nombreRedSocial = "Instagram"
                    enlace = "https://www.instagram.com"
                />
                <ItemsLink 
                    nombreRedSocial = "Tiktok"
                    enlace = "https://www.tiktok.com"
                />
        </div>
    )
}

export default App;