import commonStyles from "./CommonStyles.module.css"
import { h1Title } from "@/app/fonts"
import { EarlyCard } from "./CommonUI"


export default function EarlySection() {
    return (
        <section className={[commonStyles.padding, ""].join(' ')} >
            <div className={["tablet:flex justify-around pb-8 items-center"].join(' ')}>
                <div >
                    <h1 className={[h1Title, 'text-[40px]'].join(' ')}> Being Early Matters <br />Open the Runes Gate with <br />your Forged Keys</h1>
                    <p className={[commonStyles.lightText, "py-6 text-lg max-w-[616px]"].join(" ")}>Each Key is backed with Runes Tokens that our team will mint. <br />Our Asset Managers and Devs will select the best tokens to mint early based on Market Sentiment and Alpha calls. <br />Invest 100$ and let us expose you to this new market opportunity.</p>
                    <div className="grid grid-cols-2">
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
    )
}
