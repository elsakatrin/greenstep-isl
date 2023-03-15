import Layout from "@/components/Layout/Layout"
import OnboardingWrapper from "@/components/OnboardingWrapper/OnboardingWrapper"
import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'
import { useEffect } from "react"


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
                    <p>When choosing explore you get to choose what kind of activity you want to do! You get a plan of your explorations, you can see the locations and information about all the interesting places you’re about to visit. 
                    When you’ve finished exploring you get information about your accomplishments!</p>
                    
                    </OnboardingWrapper>
                    

                    <OnboardingWrapper heading="Join a quest"> 
                        <p>It’s a game! You can choose what activity you want to use, and you only get one location at a time. When arriving to a location you get a task that you have to complete to keep going on your journey. You also get side quests that you can visit 
                        When you’ve finished your quest you get information about your accomplishments and even share them with your friends!  </p>
                    </OnboardingWrapper>


                    <OnboardingWrapper heading="The icons"> 
                        <p>What do all the icons mean? We’ll walk you through it.</p>
                    </OnboardingWrapper>


                    <OnboardingWrapper heading="Sustainability">
                        <p>We want to encourage you to make new and more environmental friendly choices! </p> 
                        <p>Environmental sustainability is the ability to maintain an ecological balance in our planet's natural environment and conserve natural resources to support the wellbeing of current and future generations.</p>
                        <p>When exploring we want you to walk or use sustainable transportation when exploring your surroundings, don’t litter and remember to respect the environment. </p>
                        <p>There's no planet B</p>
                    </OnboardingWrapper>
                    </div>

                </div>
                <button className="blaze-prev">previous</button>
                <button className="blaze-next">next</button>
            </div>
            <div className="blaze-pagination"></div>
            </div>
        
            </Layout>
        </>
    )
}