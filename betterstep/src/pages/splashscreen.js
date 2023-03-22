import Layout from "@/components/Layout/Layout"
import logo from "../public/logo-text.svg"
import Image from "next/image"

export default function Splashscreen() {
    return (
        <>
            <Layout title="Green Step">
                <div>
            <Image className={logo} src={logo} alt="logo" width={200} height={600}/>
            </div>
            </Layout>
        </>
    )
}