import Layout from "@/components/Layout/Layout"
import Button from "@/components/Button/Button"
import Link from "next/link"

// user management view?

export default function User() {
    return (
        <>
            <Layout title="User">
                <h1>User</h1>
                <Link href="/user/settings">
                    <Button>
                        Settings
                    </Button>
                </Link>
                <Link href="/user/achievements">
                    <Button>
                        Achievements
                    </Button>
                </Link>

            </Layout>
        </>
    )
}