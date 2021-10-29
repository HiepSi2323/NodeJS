import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.scss' 
import {useLocation, Link} from 'react-router-dom'

export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (   
        <div className="watch">
           <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
                <video 
                    className="video" 
                    autoPlay 
                    progress 
                    controls
                    src={movie.video}
                />
            </Link>
            
        </div>            
    )
}
