import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]/options";


export default function AvatarUSer() {
    const { data: session } = useSession()
    console.log ({session})
    if (session?.user?.image) {
        const img = session.user.image;
        return (<Avatar src={<img src={img} alt="avatar" className="avatar" />}  shape="square"/>)
    } else {
        return (<Avatar icon={<UserOutlined />} shape="square"/>)
    }
}
export async function getServerSideProps() {
    return {
        props: {
            session: await getServerSession(
                authOptions
            ),
        },
    }
}