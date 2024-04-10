import { hiddenOnMobile } from "@/utils/styles"
import commonStyles from "./CommonStyles.module.css"
import Link from "next/link"
import { orbitron } from "@/app/fonts"



interface SimpleCardProps {
    title: string
    content: string
    toggle?: boolean
    image?: string
    label?: string
}

export const IconCard = ({ title, content, toggle, image, label }: SimpleCardProps) => {
    return (
        <div className=" text-center max-w-[400px] mx-auto mb-[4rem]">
            <div className="h-[64px]">

                <img src={image} className=" mx-auto" alt="" width={64} height={64} />
            </div>
            <div className="my-6">
                <h3 className={['text-xl mb-4 font-bold'].join(' ')}>{title}</h3>
                <p className={['text-base h-[72px]'].join(' ')}>{content}</p>
                <button className=" bg-black py-3 rounded-[20px] px-6 text-white mt-6">Forge {label} key</button>
            </div>
        </div>
    )
}


interface TeamCardProps {
    name: string
    post: string
    content: string
    toggle?: boolean
    image?: string
    LinkedIn?: string
    X?: string
    Dribble?: string
}
export const TeamCard = ({ name, content, post, image }: TeamCardProps) => {
    return (
        <div className=" text-center my-4">
            <img src={image} height={80} width={80} className="mx-auto my-6" />

            <h3 className={[commonStyles.boldText, ' text-lg tablet:text-[32px] '].join(' ')}>{name}</h3>
            <p>{post}</p>
            <p className={['text-base py-4 pr-4'].join(' ')}>{content}</p>
            <div className="flex gap-[12px] justify-center">
                <Link href={"#"}> <img src="/Icon/LinkedIn.svg" alt="" /> </Link>
                <Link href={"#"}> <img src="/Icon/X.svg" alt="" /> </Link>
                <Link href={"#"}> <img src="/Icon/Youtube.svg" alt="" /> </Link>
            </div>
        </div>
    )
}
export const AdvtangeMobileCard = ({ title, content }: SimpleCardProps) => {
    return (
        <div className=" text-center my-[4rem]">
            <img src="/Icon/block-icons.svg" height={36} width={36} className="mx-auto my-6" />
            <h3 className={[commonStyles.boldText, 'text-[24px] '].join(' ')}>{title}</h3>
            <p className={['text-base py-4 pr-4'].join(' ')}>{content}</p>
            <div className="flex gap-[12px] justify-center items-center">
                <button className="px-6 py-3 border">Learn More</button>
                <Link href="#"> Sign Up</Link>
            </div>
        </div>
    )
}

interface CounterCardProps {
    time: string
    label: string

}

export const CounterCard = ({ time, label }: CounterCardProps) => {
    return (
        <div className=" my-3 mx-6">
            <h3 className=" text-[70px]">{time}</h3>
            <p >{label}</p>
        </div>
    )
}


export const EarlyCard = ({ time, label }: CounterCardProps) => {
    return (
        <div className=" my-3 tablet:mr-6">
            <h1 className={[orbitron.className, " font-bold text-[48px]"].join(' ')}>{time}</h1>
            <p >{label}</p>
        </div>
    )
}


export const CounterBlock = () => {
    return (
        <div className={[orbitron.className, "mt-8 text-[24px] px-[4rem]"].join(' ')}>
            <h2 className="tablet:ml-6">HALVING BLOCK 840000 IN :</h2>
            <div className="flex justify-center">
                <CounterCard time="9" label="Days" />
                <CounterCard time="1" label="Hours" />
                <CounterCard time="59" label="Minutes" />
                <CounterCard time="59" label="Seconds" />
            </div>
        </div>
    )
}