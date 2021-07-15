import React from 'react';
import './treeItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutubeSquare, faGithub, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types';
// import './colors.css';
function ItemsLinks({enlace, icono, nombreRedSocial, }){

    let claseColor = "";
    let iconColor = "";


    switch(nombreRedSocial){
        case "Facebook":
            icono = faFacebook
            claseColor = "facebook"
            iconColor = "#3b5998"
            break;
        case "Youtube" :
            icono = faYoutubeSquare
            claseColor = "youtube"
            iconColor = "#c4302b"
            break;
        case "Github":
            icono = faGithub
            claseColor = "github"
            iconColor = "#171515"
            break;
        case "Instagram":
            icono = faInstagram
            claseColor = "instagram"
            iconColor = "#dd2a7b"
            break;
        case "Tiktok":
            icono = faTiktok
            claseColor = "tiktok"
            iconColor = "#010101"
            break;
    };

    
    const divStyle = {
        backgroud: "#fff",
        border:`3px solid ${iconColor}`,
        padding: '5px',
    }

    const divColor = {
        color: iconColor,
    }

    return(
        <div className="social-media-items" style={divStyle}>
        <a href={enlace} target="_blank" className="link">
            <FontAwesomeIcon  iconName={icono} icon={icono} style={divColor}/>
            <span className="nombre-item">{nombreRedSocial}</span>
            <div></div>
        </a>
        </div> 
    )
}

ItemsLinks.propTypes = {
    enlace:PropTypes.string.isRequired,
    
}

ItemsLinks.defaultProps = {
    enlace: "www.facebook.com",
    icono: faFacebook,
    nombreRedSocial: "Facebook",
    claseColor: "facebook",
}

export default ItemsLinks;