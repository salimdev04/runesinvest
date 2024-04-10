import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { hiddenOnMobile } from "@/utils/styles"
import { Orbitron } from "next/font/google"
import { h1Title, orbitron } from "@/app/fonts"


export default function DiscoverSection() {
    return (
        <section className={commonStyles.padding} >
            <div className={["tablet:flex justify-around pb-8 items-center"].join(' ')}>
                <div >
                    <h1 className={[h1Title, 'text-[40px]'].join(' ')}> <span className="">ONE KEY</span> <br /> <span className="tablet:ml-[4rem]">TO RULE THEME </span> <br /> ALL</h1>
                    <p className={[commonStyles.lightText, "py-6 text-lg max-w-[616px]"].join(" ")}>RuneKeys NFTs are your gateway to early Runes Tokens. <br />Mint your NFT and let our experts in investment expose you early to the ecosystem <br /> Our expertise in asset management, technical development and early blossoming ecosystems along our trading abilities will benefit the Key holders</p>
                    <button className=" px-6 py-3 bg-black text-white">Learn More</button>
                </div>
                <div>
                    <img src="/runes-key.png" alt="" className="tablet:max-w-[616px]  max-h-[600px] mt-6" />
                </div>
            </div>

        </section>
    )
}
