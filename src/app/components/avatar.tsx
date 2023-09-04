
import {useSession} from "next-auth/react"


export default function AvatarUser () {
    const { data: session } = useSession()
    if (session?.user?.image) {
        const img = session.user.image;
       
    } else {
        
    }
}
