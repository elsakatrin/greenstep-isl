import Button from '@/components/Button/Button'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

export default function Choice() {
    return (
        <>
            <Layout title="Choice">
                <h1>Choose mode</h1>
                <Button>
                    <Link href="/mode/explore">
                        Explore
                    </Link>
                </Button>
                <Button>
                    <Link href="/mode/quest">
                        Quest
                    </Link>
                </Button>
            </Layout>
        </>
    )
}