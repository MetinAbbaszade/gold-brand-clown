import { Button, Stack, Typography } from "@mui/material"

const ProfilePageComponent = () => {
    return (
        <Stack component={'main'} alignItems={'center'} justifyContent={'center'}>
            <Stack>
                <Typography>Member Profile</Typography>
                <Typography>Member Profile</Typography>
                <Button>Platinum</Button>
            </Stack>
            <Stack>
                <Stack>
                    <Button>Profile</Button>
                </Stack>
                <Stack>
                    <Button>Orders</Button>
                </Stack>
                <Stack>
                    <Button>Wishlist</Button>
                </Stack>
                <Stack>
                    <Button>Settings</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProfilePageComponent