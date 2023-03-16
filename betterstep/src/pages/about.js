import Layout from "@/components/Layout/Layout"
import Link from "next/link"
import Image from "next/image"
import earth from "../public/earth-green.svg"
import recycle from "../public/recycle.svg"
import styles from "../styles/aboutpage/about.module.css"


export default function About() {
    return (
        <>
            <Layout title="About">

                <div className={styles.aboutcontainer}>

                    <h1 className={styles.heading}>What is sustainability?</h1>

                    <h2 className={styles.subheading}>We want to encourage you to make new and more environmental friendly choices! </h2>

                    <Image className={earth} src={earth} alt="Earth" width={115} height={48}/>

                    <h3 className={styles.middleheading}>Sustainability and the planet</h3>
                    <p className={styles.bodytxt}>Sustainability consists of fulfilling the needs of current generations without compromising the needs of future generations, while ensuring a balance between economic growth, environmental care and social well-being.
                        Environmental sustainability is the ability to maintain an ecological balance in our planet's natural environment and conserve natural resources.
                        The foundations of environmental sustainability are: safeguarding water, saving energy, reducing waste, using recyclable packaging, limiting or eliminating the use of plastics, using sustainable transport, reusing paper and protecting flora and fauna.</p>

                    <h3 className={styles.middleheading}> Small changes can do a lot! </h3>
                    <p className={styles.bodytxt} >We know it’s hard to save the planet, but here are some small changes most people can do that can help a lot!</p>


                    <div className={styles.list}>
                        <ol>
                        <ul>Refuse plastic wherever you can.</ul>
                        <ul>Cut coffee-cup waste by carrying your own reusable cup</ul>
                        <ul>Invest in a refillable glass water bottle</ul>
                        <ul>Recycle all paper and cardboard packaging</ul>
                        <ul> Look for organic cotton products</ul>
                        <ul>Choose refillable, organic cleaning products</ul>
                        <ul>Plan daily and weekly menu</ul>
                        <ul>Cut down on car journeys</ul>
                        </ol>
                    </div>

                        <div className={styles.ending}>
                            <h3 className={styles.slogan} >There's no planet B</h3>
                            <Image className={recycle} src={recycle} alt="Recycle" width={115} height={48}/>
                        </div>
                  </div>  
            </Layout>
        </>
    )
}