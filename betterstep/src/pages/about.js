import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import Image from "next/image";
import earth from "../public/earth-green.svg";
import recycle from "../public/recycle.svg";
import styles from "../styles/aboutpage/about.module.css";
import Logo from '@/components/Logo/Logo'

export default function About() {
  return (
    <>
      <Layout title="About">
      <div className={styles.logoplace}>
            <Logo/>
                </div>
        <div className={styles.aboutcontainer}>
          <h1 className={styles.heading}>What is sustainability?</h1>

          <h2 className={styles.subheading}>
            We want to encourage you to make new and more environmental friendly
            choices!{" "}
          </h2>

          <Image
            className={styles.earth}
            src={earth}
            alt="Earth"
            width={115}
            height={48}
          />

          <h3 className={styles.middleheading}>
            Sustainability and the planet
          </h3>
          <p className={styles.bodytxt}>
          Being sustainable means living in a way that meets our needs without compromising the ability of future generations to meet their own needs. 
          It's about balancing the economic, social, and environmental aspects of our lives to create a better world for ourselves and others
          There are many reasons why being sustainable is important. For one, we only have one planet, and it's our responsibility to take care of it. 
          By reducing our carbon footprint and using resources more efficiently, we can help mitigate the impacts of climate change and protect biodiversity.
          By making small changes in our daily lives, we can all contribute to a more sustainable future. 
          So let's work together to create a better world for ourselves and for future generations!
          </p>

          <h3 className={styles.middleheading}>
            {" "}
            Small changes can do a lot!{" "}
          </h3>
          <p className={styles.bodytxt}>
            We know it’s hard to save the planet, but here are some small
            changes most people can do that can help a lot!
          </p>

          <div className={styles.list}>
            <ol>
              <li className={styles.listitem}>Reduce, reuse, and recycle: Reduce the amount of waste you produce by choosing reusable items over disposable ones, and recycling whenever possible.</li>
              <li className={styles.listitem}>Conserve energy: Turn off lights and electronics when you're not using them, and consider switching to energy-efficient appliances and light bulbs.</li>
              <li className={styles.listitem}>Choose sustainable products: Look for products made from sustainable materials and produced using sustainable methods.</li>
              <li className={styles.listitem}>Eat sustainably: Choose foods that are produced sustainably, such as locally grown fruits and vegetables, and reduce your meat consumption.</li>
              <li className={styles.listitem}>Refuse plastic wherever you can.</li>
              <li className={styles.listitem}>Cut coffee-cup waste by carrying your own reusable cup</li>
              <li className={styles.listitem}>Invest in a refillable glass water bottle</li>
              <li className={styles.listitem}>Recycle all paper and cardboard packaging</li>
              <li className={styles.listitem}> Look for organic cotton products</li>
              <li className={styles.listitem}>Choose refillable, organic cleaning products</li>
              <li className={styles.listitem}>Plan daily and weekly menu</li>
              <li className={styles.listitem}>Cut down on car journeys</li>
            </ol>
          </div>

          <div className={styles.ending}>
            <h3 className={styles.slogan}>There's no planet B</h3>
            <Image
              className={styles.recycle}
              src={recycle}
              alt="Recycle"
              width={115}
              height={48}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
