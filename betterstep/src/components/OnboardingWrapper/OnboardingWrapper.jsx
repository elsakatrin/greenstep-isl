import styles from './OnboardingWrapper.module.css'
import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'


//On boarding for the first time you log in. 
//This is a reusable component so the contents inside change
//Children prop lets us put html inside when we import the component inside pages
export default function OnboardingWrapper({heading, children}) { 
    return(
        <div>
            <div className={styles.container}>
                <h1>{heading}</h1>
                {children}
            </div>
        </div>
    )
}
