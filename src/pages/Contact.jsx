import linkedinIcon from '../assets/iconmonstr-linkedin-3.svg'
import githubIcon from '../assets/iconmonstr-github-1.svg'

export default function Contact() {
    return (
        <div id='contact' data-anchor="hero ">
            <div className="fp-tableCell ">
                <div className="grid gap-5 items-center w-full">
                    <div className="intro">
                        <h2 className="mb-2 text-2xl font-bold">Contact.</h2>
                        <p className="font-light mb-2 max-w-lg">I am currently looking for new opportunities. If you're looking for someone to join your project or just want to say hello, feel free to drop me a message!</p>
                        <p className='mb-6'>
                            <a className="cursor-pointer font-semibold underline" href="mailto:christianleong@gmail.com">christianleong@gmail.com</a>
                        </p>
                        <div className='flex justify-between w-20'>
                            <a href="https://www.linkedin.com/in/christianleong/"><img src={linkedinIcon} alt="" /></a>
                            <a href="https://github.com/christianleong"><img src={githubIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}