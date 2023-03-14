import styles from './Onboard.module.css'
import Link from 'next/link'

//On boarding for the first time you log in. 
//This is a reusable component so the contents inside change
//Children prop lets us put html inside when we import the component inside pages
export default function Onboarding({title, children}) { 
    return(
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className={styles.container}>
            <h1>{heading}</h1>
            {children}
        </div>
        </>
    )
}
