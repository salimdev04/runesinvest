import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { FaqAccordion } from "./FaqAccordion"
import { hiddenOnMobile } from "@/utils/styles"
import { h1Title } from "@/app/fonts"
import { CounterBlock } from "./CommonUI"

export default function FaqSection() {
    return (
        <section className={[commonStyles.padding, "max-w-[968px] mx-auto text-center"].join(" ")} >
            <h1 className={[h1Title, 'text-[48px]'].join(' ')}>Frequently Asked Questions</h1>
            <div>
                <img src="/image-2.png" alt="" width={325} className={["mx-auto ", commonStyles.hiddenOnMobile].join(" ")} />
                <p className={[commonStyles.lightText, "py-6 text-lg"].join(" ")}>Find answers to common questions about NFTs, Bitcoin Blockchain, and the investment process.</p>
            </div>
            <div className="my-24">
                <FaqAccordion />
            </div>
            <div >
                <h1 className={[commonStyles.boldText, 'text-[32px]'].join(" ")}>Still have questions?</h1>
                <button className=" rounded-lg px-6 py-3 border mt-4">Join us on Discord</button>
                <CounterBlock addFlexCent="addFlexCent" />
            </div>

        </section>
    )
}
