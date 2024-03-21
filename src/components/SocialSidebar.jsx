import { useMediaQuery } from 'react-responsive'
import './SocialSidebar.css'
// import anime from 'animejs/lib/anime.es.js';

export default function SocialSidebar() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return (
        <>
        {
            !isMobile &&
            <div className="social-media">
                <div className='social-media-indicator'></div>
                <ul>
                    <li title='In' className='social-media-links'><a aria-label="LinkedIn" href="https://www.linkedin.com/in/christianleong/" >In</a></li>
                    <li title='Git' className='social-media-links'><a aria-label="Github" href="https://github.com/christianleong" >Git</a></li>
                    <li title='Mail' className='social-media-links'><a aria-label="Email" href="mailto:christianleong@gmail.com" >Mail</a></li>
                </ul>
            </div>
        }
        </>
    )
}