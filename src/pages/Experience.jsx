import { useMediaQuery } from 'react-responsive'
import TickIcon from '../components/TickIcon'

export default function Experience({ navbarOpen }) {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const expContent = [
        {title: "Software Engineering Student", workplace: "General Assembly", description: "After working in the accounting industry for 5 years, I started exploring more deeply into my new found passion for pragramming.", period: "Dec 2023 - Mar 2024"},
        {title: "Tax Accountant", workplace: "MVA Bennett Pty Ltd", description: "Towards the end of 2021, Aberdeen Advisory merged with MVA Bennett which opened up avenues for expanding our skill set and collaborating with a fresh cohort of colleagues.", period: "Oct 2021 - Nov 2023"},
        {title: "Tax Accountant", workplace: "Aberdeen Advisory Pty Ltd", description: "With a strong commitment to personal development, I later joined Aberdeen Advisory to expand my knowledge and problem solving skills by working with a more diverse clientele. I was also given the opportunity to liaise directly with clients which enabled me to hone my communication skills.", period: "Mar 2019 - Oct 2021"},
        {title: "Graduate Accountant", workplace: "AscendPoint", description: "Worked in a boutique accounting firm where I first developed my skills as a tax accountant, preparing financial statements and tax returns for domestic and foreign clients.", period: "Jan 2018 - Mar 2019"},
    ]

    return (
        <div 
            id={isMobile ? 'experience' : undefined} 
            className={`flex flex-col items-center justify-center bg-white relative my-0 mx-auto py-0 px-8 ${isMobile ? "" : "w-4/5"}`}
        >
            <div className="space-y-6 border-l-2 border-dashed">
                
                {expContent.map((job, idx) => (
                    <div className="relative w-full" key={idx}>
                        <TickIcon navbarOpen={navbarOpen} />
                        <div className="ml-6">
                            <h4 className="font-bold text-slate-500">{job.title}</h4>
                            <h5 className="font-normal text-slate-500">{job.workplace}</h5>
                            <p className="mt-2 max-w-screen-sm text-sm opacity-70">{job.description}</p>
                            <span className="mt-1 block text-sm font-semibold opacity-70">{job.period}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}