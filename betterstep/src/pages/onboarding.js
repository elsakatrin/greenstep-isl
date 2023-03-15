import Layout from "@/components/Layout/Layout"
import OnboardingWrapper from "@/components/OnboardingWrapper/OnboardingWrapper"
import styles from '../components/OnboardingWrapper/OnboardingWrapper.module.css'
import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'
import { useEffect } from "react"
import Image from "next/image"
import exploreicon from "../public/explore-icon.svg"
import backicon from "../public/back-green.svg"
import list from "../public/list-green.svg"
import questionmark from "../public/questionmark-green.svg"
import user from "../public/user-green.svg"
import ocean from "../public/waves.svg"
import nature from "../public/tree.svg"
import park from "../public/park.svg"
import views from "../public/views.svg"
import church from "../public/church.svg"
import history from "../public/history.svg"
import restaurant from "../public/restaurant.svg"
import cafe from "../public/coffee.svg"
import bar from "../public/bar.svg"
import questicon from "../public/quest-icon.svg"
import back from "../public/arrow-left-green.svg"
import forward from "../public/arrow-right-green.svg"



export default function Onboarding() {
    //To make the slider work from side to side
    //Gotten from here https://blaze-slider.dev/docs 
    useEffect (() => {
    const el = document.querySelector('.blaze-slider')
    new BlazeSlider(el)
    });

    return (
        <>
        <Layout title="Onboarding">
        <div className="blaze-slider">
            <div className="blaze-container">
                <div className="blaze-track-container">
                    <div className="blaze-track">

                    
                    <OnboardingWrapper heading="Explore new grounds">
                        <Image src={exploreicon} alt="Explore example" width={115} height={48}/>

                    <p>When choosing explore you get to choose what kind of activity you want to do! You get a plan of your explorations, you can see the locations and information about all the interesting places you’re about to visit. 
                    When you’ve finished exploring you get information about your accomplishments!</p>
                    <div>
                    <Image src={backicon} alt="Go back" width={115} height={48}/>
                    <Image src={list} alt="List of all places" width={115} height={48}/>
                    <Image src={questionmark} alt="Explainations for app" width={115} height={48}/>
                    <Image src={user} alt="User profile" width={115} height={48}/>
                    </div>
                    </OnboardingWrapper>
                    

                    <OnboardingWrapper heading="Join a quest"> 
                    <Image src={questicon} alt="Quest example" width={115} height={48}/>
                        <p>It’s a game! You can choose what activity you want to use, and you only get one location at a time. When arriving to a location you get a task that you have to complete to keep going on your journey. You also get side quests that you can visit 
                        When you’ve finished your quest you get information about your accomplishments and even share them with your friends!  </p>
                    </OnboardingWrapper>


                    <OnboardingWrapper heading="The icons"> 
                        <p>What do all the icons mean? We’ll walk you through it.</p>
                        <div className={styles.icons}>

                        <div className={styles.icon}>
                        <Image src={ocean} alt="Beach" className="" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={nature} alt="Nature" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={park} alt="Parks" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={views} alt="Views" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={church} alt="Church" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={history} alt="History" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={restaurant} alt="Restaurant" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={cafe} alt="Café" width={115} height={48}/>
                        </div>
                        <div className={styles.icon}>
                        <Image src={bar} alt="Bar" width={115} height={48}/>
                        </div>
                        </div>
                    </OnboardingWrapper>


                    <OnboardingWrapper heading="Sustainability">
                        <p>We want to encourage you to make new and more environmental friendly choices! </p> 
                        <p>Environmental sustainability is the ability to maintain an ecological balance in our planet's natural environment and conserve natural resources to support the wellbeing of current and future generations.</p>
                        <p>When exploring we want you to walk or use sustainable transportation when exploring your surroundings, don’t litter and remember to respect the environment. </p>
                        <p>There's no planet B</p>
                    </OnboardingWrapper>
                    </div>
                </div>

            <button className="blaze-prev">
            <Image src={back} alt="back" width={115} height={48} />
            </button>

            <button className="blaze-next">
            <Image src={forward} alt="back" width={115} height={48} />
            </button>

        </div>
            <div className="blaze-pagination"></div>
        
            </div>
        
            </Layout>
        </>
    )
}