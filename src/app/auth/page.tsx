import AuthPage from "@/components/allPages/AuthPage"
import { Stack } from "@mui/material"
import { Metadata } from "next"

// export const metadata: Metadata = {
//     title: 'Welcome Boy!'
// }

const page = () => {
    return (
        <Stack
            minHeight={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'#f9f6f0'}
        >
            <AuthPage />
        </Stack>
    )
}

export default page