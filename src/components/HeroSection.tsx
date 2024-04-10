import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { hiddenOnMobile } from "@/utils/styles"
import { h1Title } from "@/app/fonts"
import { CounterBlock } from "./CommonUI"

export default function HeroSection() {
    return (
        <>
            <section className={[' h-[950px] relative addBg'].join(' ')}>
                <Image src="/runes-hero.png" alt='background image'
                    layout='fill'
                    quality={100}
                    objectFit='fill'
                    priority
                    className='-z-10 hidden tablet:block bg-slate-500' />

                <div className="tablet:px-[6rem] px-4 pt-[15rem]">
                    <div className=" max-w-[560px] text-white">
                        <h1 className={[h1Title, 'text-[56px]'].join(' ')}><span>Runes Invest</span> <br /> <span className="tablet:ml-[4rem]"> Early on <span className=" underline">Runes</span></span>  <span className=" underline">Protocol</span></h1>
                        <p className=" py-[2rem]">Discover the future of Investment on Runes Tokens with our multichain NFT collection. <br />Forge the Key and open the Gates of Runes Protocol</p>

                    </div>
                    <div className=" text-white justify-between mt-[2rem] hidden tablet:flex">
                        <button className=" bg-black px-6 h-[48px]">Learn More</button>
                        <CounterBlock />
                    </div>
                </div>
            </section>

        </>
    )
}
