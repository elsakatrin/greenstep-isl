import Layout from "@/components/Layout/Layout"
import Link from "next/link"

export default function About() {
    return (
        <>
            <Layout>
                <h2>Here comes the map</h2>
                <Link href="/map">
                    Map page
                </Link>
                <Link href="/quest">
                    Start
                </Link>
            </Layout>
        </>
    )
}