import { useMediaQuery } from 'react-responsive';

export default function SocialSidebar() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    if (isMobile) {
        return null; // Return nothing if it's a mobile device
    }

    return (
        <div className="fixed z-50 right-6 font-light" style={{ top: '45%' }}>
            <div></div>
            <ul>
                <li title='In' className='mb-4'><a href="https://www.linkedin.com/in/christianleong/" >In</a></li>
                <li title='Git' className='mb-4'><a href="https://github.com/christianleong" >Git</a></li>
                <li title='Mail' className='mb-4'><a href="mailto:christianleong@gmail.com" >Mail</a></li>
            </ul>
        </div>
    );
}
