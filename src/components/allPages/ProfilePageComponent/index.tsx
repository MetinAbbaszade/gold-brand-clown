'use client'

import OrdersTab from "@/components/_common/OrdersTab"
import ProfileTab from "@/components/_common/ProfileTab"
import SettingsTab from "@/components/_common/SettingsTab"
import WishlistTab from "@/components/_common/WishlistTab"
import { AuthContext } from "@/context/AuthContext"
import { playfair_display, raleway } from "@/providers/ThemeRegistry"
import { Box, Button, Stack, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

const ProfilePageComponent = () => {

    const [activeTab, setActiveTab] = useState<'Profile' | 'Orders' | 'Wishlist' | 'Settings'>('Profile');
    const router = useRouter();
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        if(!auth.token){
            router.push('auth')
        }
    }, [])

    const tabPanels: Record<typeof activeTab, React.ReactNode> = Object.create(Object.prototype, {
        Profile: {
            value: <ProfileTab />
        },
        Orders: {
            value: <OrdersTab />
        },
        Wishlist: {
            value: <WishlistTab />
        },
        Settings: {
            value: <SettingsTab />
        }
    })

    return (
        <Stack alignItems={'center'} justifyContent={'center'} className="profile" width={'100%'}>
            <Stack
                className="profile__card"
                borderRadius={'8px'}
                boxShadow={'0 4px 16px rgba(0, 0, 0, 0.1)'}
                maxWidth={'800px'}
                width={'100%'}
                border='1px solid var(--color-gray)'
                position={'relative'}
            >
                <Stack
                    sx={{
                        background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0.1), rgba(255, 255, 255, 0))',
                        borderBottom: '1px solid #f2e6c2'
                    }}
                    alignItems={'center'}
                    padding={'1.5rem'}
                >
                    <Typography
                        variant="h6"
                        fontSize={'1.5rem'}
                        mb={'1.5rem'}
                        letterSpacing={'1px'}
                        color="#1a1a1a"
                        sx={{
                            fontFamily: playfair_display.style.fontFamily
                        }}
                    >
                        Member Profile
                    </Typography>
                    <Stack
                        width={'100px'}
                        height={'100px'}
                        margin={"0 auto 1.5rem"}
                        borderRadius={'50%'}
                        bgcolor={'#f2e6c2'}
                        border={'3px solid #d4af37'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Typography
                            sx={{
                                fontFamily: playfair_display.style.fontFamily
                            }}
                            fontSize={'2.2rem'}
                            color="#9e7c0c"
                            fontWeight={700}
                        >
                            JD
                        </Typography>
                    </Stack>
                    <Button
                        sx={{
                            color: '#fff',
                            border: 'none',
                            background: 'linear-gradient(to right, #9e7c0c , #d4af37)',
                            borderRadius: '16px',
                            fontFamily: raleway.style.fontFamily,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            padding: '0.5rem 1.5rem',
                            fontWeight: 500
                        }}
                    >
                        Platinum
                    </Button>
                </Stack>
                <Stack direction="row" width="100%" bgcolor={'#f5f5f5'}>
                    {(['Profile', 'Orders', 'Wishlist', 'Settings'] as const).map((label) => (
                        <Button
                            key={label}
                            sx={{
                                width: '25%',
                                padding: '10px 0',
                                borderBottom: activeTab === label ? '2px solid #d4af36' : 'none',
                                color: activeTab === label ? '#d4af36' : '#7a7a7a',
                                '&:hover': activeTab === label ? {
                                    bgcolor: "inherit"
                                } : {
                                    color: '#9e7c0c',
                                    bgcolor: "inherit"
                                },
                            }}
                            onClick={() => setActiveTab(label)}
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>
                <Box m={5}>
                    {tabPanels[activeTab]}
                </Box>
            </Stack>
        </Stack >
    )
}

export default ProfilePageComponent