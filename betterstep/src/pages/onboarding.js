import Layout from "@/components/Layout/Layout"
import OnboardingWrapper from "@/components/OnboardingWrapper/OnboardingWrapper"
import OnboardingStart from "@/components/OnboardingStart/OnboardingStart"
import styles from '../components/OnboardingWrapper/OnboardingWrapper.module.css'
import Button from "@/components/Button/Button"
import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'
import { useEffect, useState } from "react"
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
import back from "../public/arrow-left-green.svg"
import forward from "../public/arrow-right-green.svg"
import earth from "../public/navicons/earth-icon.svg"
import shopping from "../public/shopping.svg"





export default function Onboarding() {
    //To make the slider work from side to side
    //Gotten from here https://blaze-slider.dev/docs 
    const [pageNumber, setPageNumber] = useState(0)
    const [activePage, setActivePage] = useState(false)

    useEffect(() => {
        
        const el = document.querySelector('.blaze-slider')

        //Setting from the library, only one slide showing no matter the screen size
        const slider = new BlazeSlider(el, {
            all: {
                slidesToShow: 1,
                loop: false,
            },
            '(min-width: 500px)': {
                loop: false,
                slidesToShow: 1,
            },
            '(min-width: 900px)': {
                slidesToShow: 1,
            },
        }
        )
        const unsubscribe = slider.onSlide((i,f,l)=> {
            console.log("i", i)
            console.log("pageNumber", pageNumber)
           
        
            setPageNumber(i+1)
        })
        return () => {
        //unsubscribe()
        } 
    }, []);

    
    
    //Onboarding slides, each component helds one slide 
    //Last component is another component called 'onboardingstart' because it has a start button - maybe not the best naming convention but it made sense when I did it 
    return (
        <>
            <Layout title="Onboarding">
                <div className={styles.modal}>
                    <div className="blaze-slider">
                        <div className="blaze-container">
                            <div className="blaze-track-container">
                                <div className="blaze-track" id={styles.slidecontainer}>


                                    <OnboardingWrapper heading="Explore new grounds">
                                        <Image className={styles.gameicon} src={exploreicon} alt="Explore example" width={115} height={48} />

                                        <p className={styles.bodytxt}>This app will help you explore new grounds! Take a walk and see what your surroundings have to offer.
                                        You'll get a map where you see icons that tell you what kind of places are nearby and information on them.
                                        We encourage you to explore with sustainability in mind. All of the places in our app are sustainable and eco-friendly.
                                        </p>
                                            <p className={styles.explain}>Click on the icons to see what they mean</p>
                                        <div className={styles.naviconscontainer}>

                                            <div className={styles.navicon}>
                                                <Image src={earth} alt="Go back" width={115} height={35} />
                                                <span className={styles.hovertxt} id={styles.home}>Home</span>
                                            </div>
                                            <div className={styles.navicon}>
                                                <Image src={list} alt="List of all places" width={115} height={35} />
                                                <span className={styles.hovertxt}>List of all places</span>
                                            </div>
                                            <div className={styles.navicon}>
                                                <Image src={questionmark} alt="Explainations for app" width={115} height={35} />
                                                <span className={styles.hovertxt}>About this app</span>
                                            </div>
                                            <div className={styles.navicon}>
                                                <Image src={user} alt="User profile" width={115} height={35} />
                                                <span className={styles.hovertxt} id={styles.profile}>Your profile</span>
                                            </div>
                                        </div>
                                    </OnboardingWrapper>


                                    {/* This section is commented out for future use when the Quest game will be implemented */}
                                    {/*<OnboardingWrapper heading="Join a quest">
                                        <Image className={styles.gameicon} src={questicon} alt="Quest example" width={115} height={48} />
                                        <p className={styles.bodytxt} >It’s a game! You can choose what activity you want to use, and you only get one location at a time. When arriving to a location you get a task that you have to complete to keep going on your journey. You also get side quests that you can visit
                                            When you’ve finished your quest you get information about your accomplishments and even share them with your friends!  </p>
                                     </OnboardingWrapper>*/}


                                    <OnboardingWrapper heading="The icons">
                                        {/* <p className={styles.bodytxt} >What do all the icons mean? We’ll walk you through it.</p> */}
                                        <p className={styles.bodytxt}>You'll see these icons when you explore, they tell you what kind of a place you're looking at!</p>
                                            <p className={styles.explain}>Click on the icons to see what they mean</p>
                                        <div className={styles.iconscontainer}>

                                            <div className={styles.icon}>
                                                <Image src={ocean} alt="Beach"  width={115} height={48} />
                                                <span className={styles.hovertxtpg2}>Beach</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={nature} alt="Nature" width={115} height={48} />
                                                <span className={styles.hovertxtpg2}>Nature</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={shopping} alt="Shopping" width={115} height={48} />
                                                <span className={styles.hovertxtpg2} id={styles.shopping}>Shopping</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={views} alt="Views" width={115} height={48} />
                                                <span className={styles.hovertxtpg2}>Views</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={church} alt="Church" width={115} height={48} />
                                                <span className={styles.hovertxtpg2}>Church</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={history} alt="Museum" width={115} height={48} />
                                                <span className={styles.hovertxtpg2} id={styles.museum}>Museums and buildings</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={restaurant} alt="Restaurant" width={115} height={48} />
                                                <span className={styles.hovertxtpg2} id={styles.restaurant} >Restaurants</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={cafe} alt="Café" width={118} height={56} />
                                                <span className={styles.hovertxtpg2}>Cafés</span>
                                            </div>
                                            <div className={styles.icon}>
                                                <Image src={bar} alt="Bar" width={100} height={40} />
                                                <span className={styles.hovertxtpg2} id={styles.bars}>Icelandic bars</span>
                                            </div>
                                        </div>
                                    
                                        
                                    </OnboardingWrapper>


                                    <OnboardingWrapper heading="Sustainability">
                                        <p className={styles.subhead} >We want to encourage you to make new and more environmental friendly choices! </p>
                                        <p className={styles.bodytxtsust} >Environmental sustainability is the ability to maintain an ecological balance in our planet's natural environment and conserve natural resources to support the wellbeing of current and future generations.</p>
                                        <p className={styles.bodytxtsust} >When exploring we want you to walk or use sustainable transportation when exploring your surroundings, don’t litter and remember to respect the environment. </p>
                                        <p className={styles.bodytxtgreen} >There's no planet B</p>

                                       
                                    </OnboardingWrapper>

                                    <OnboardingStart heading="Are you ready to take a green step?">

                                    </OnboardingStart>

                            {/* Making the dots for the page so they work when you turn a slide */}
                                </div>          
                            </div>
                            {pageNumber < 4? (

                                <div className={styles.buttoncontainer}>
                                <button  className="blaze-prev" id={styles.prevbtn}>
                                    <Image src={back} alt="back" width={48} height={48} />
                                </button>
    
                                <button  className="blaze-next" id={styles.forwardbtn}>
                                    <Image src={forward} alt="forward" width={48} height={48} />
                                </button>
                            </div>
                                ):null}
                            {pageNumber <4 ? (
                            <div className = {styles.dots}>
                              <span className={pageNumber < 2? styles.dotdark: styles.dot}></span>
                              <span className={pageNumber === 2? styles.dotdark: styles.dot}></span>
                              <span className={pageNumber === 3? styles.dotdark: styles.dot}></span>
                            </div>
                            ):null}
                        </div>
                    </div>

                    {/* <div className="blaze-pagination" ></div> */}

                </div>

            </Layout>
        </>
    )
}