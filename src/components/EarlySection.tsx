import commonStyles from "./CommonStyles.module.css"
import { h1Title } from "@/app/fonts"
import { EarlyCard } from "./CommonUI"


export default function EarlySection() {
    return (
        <section className={[commonStyles.padding, ""].join(' ')} >

            <div className={["tablet:flex flex-row-reverse justify-around pb-8 items-center"].join(' ')}>

                <div >
                    <h1 className={[h1Title, 'text-[40px]'].join(' ')}> Being Early Matters <br />Open the Runes Gate with <br />your Forged Keys</h1>
                    <p className={[commonStyles.lightText, "py-6 text-lg max-w-[616px]"].join(" ")}>Each Key is backed with Runes Tokens that our team will mint. <br />Our Asset Managers and Devs will select the best tokens to mint early based on Market Sentiment and Alpha calls. <br />Invest 100$ and let us expose you to this new market opportunity.</p>
                    <div className="grid grid-cols-2">
                        <EarlyCard time="300$" label="Mint Price (in $BTC)" />
                        <EarlyCard time="HIGH" label="Alpha" />
                        <EarlyCard time="SOON" label="Mint Date" />
                        <div className=" my-3 tablet:mr-6">
                            <img src="/Icon/btc.svg" className="w-[34px] h-[34px] tablet:w-[64px] tablet:h-[64px]" alt="" />
                            <p className="pt-2">Blockchain</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <img src="/runes-side.png" alt="" className=" tablet:max-w-[616px]" />
                    <div className="flex justify-center mt-6">
                        <a href="https://twitter.com/RunesAcademy" target="_blank" ><button className=" py-3 bg-white text-black rounded-[20px] w-[151px] font-bold">Join Us</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
