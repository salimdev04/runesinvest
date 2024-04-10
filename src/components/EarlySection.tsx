import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { hiddenOnMobile } from "@/utils/styles"
import { h1Title, orbitron } from "@/app/fonts"
import { EarlyCard } from "./CommonUI"

const titleStyle = [commonStyles.boldText, orbitron.className, "text-4xl tablet:text-[48px]"].join(" ")
const texteStyle = [commonStyles.boldText, ""].join(" ")

export default function EarlySection() {
    return (
        <div>
            <section className={[commonStyles.padding, ""].join(' ')} >
                <div className={["tablet:flex justify-around pb-8 items-center"].join(' ')}>
                    <div >
                        <h1 className={[h1Title, 'text-[40px]'].join(' ')}> Being Early Matters <br />Open the Runes Gate with <br />your Forged Keys</h1>
                        <p className={[commonStyles.lightText, "py-6 text-lg max-w-[616px]"].join(" ")}>Each Key is backed with Runes Tokens that our team will mint. <br />Our Asset Managers and Devs will select the best tokens to mint early based on Market Sentiment and Alpha calls. <br />Invest 100$ and let us expose you to this new market opportunity.</p>
                        <div className="grid tablet:grid-cols-2 grid-cols-1">
                            <EarlyCard time="100$" label="Investment" />
                            <EarlyCard time="25$" label="Investment" />
                            <EarlyCard time="High" label="ROI" />
                            <EarlyCard time="Low" label="RISK" />
                        </div>

                    </div>
                    <div className="mt-6">
                        <img src="/runes-side.png" alt="" className=" tablet:max-w-[616px]" />
                    </div>
                </div>

            </section>
            {/* <section className={[commonStyles.padding, "block tablet:hidden"].join(' ')} >
                <h1 className=" text-[36px] font-bold">Discover the Success and Growth of Our NFT Investments</h1>
                <p className="py-6">Our asset managers NFT investments have yielded impressive results, showcasing our expertise in the market.</p>
                <h1 className=" text-[36px] font-bold">50%</h1>
                <p>Increase in NFT value over the past year</p>
                <h1 className=" text-[36px] font-bold pt-6">50%</h1>
                <p>Average return on NFT investments</p>

            </section> */}
        </div>
    )
}
