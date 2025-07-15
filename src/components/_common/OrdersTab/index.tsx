"use client"

import { AuthContext } from "@/context/AuthContext"
import { playfair_display, raleway } from "@/providers/ThemeRegistry"
import { Button, Stack, Typography } from "@mui/material"
import { useContext } from "react"

const OrdersTab = () => {

    const { auth } = useContext(AuthContext)

    return (
        <Stack>
            <Typography
                sx={{
                    fontFamily: playfair_display.style.fontFamily
                }}
                variant="h6"
                color="#1a1a1a"
                marginBottom={2}
            >
                Order History
            </Typography>
            {auth.userData?.order ?
                <Stack spacing={4}>
                    {auth.userData.order.map((data) => (
                        <Stack key={data.id}>
                            {/* head section */}
                            <Stack
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                                bgcolor={'#f5f5f5'}
                                border={'1px solid #e0e0e0'}
                                sx={{
                                    borderTopLeftRadius: '4px',
                                    borderTopRightRadius: '4px'
                                }}
                                padding={3}
                                alignItems={'center'}
                            >
                                <Stack
                                    spacing={1}
                                >
                                    <Typography
                                        fontSize={'0.9rem'}
                                        fontFamily={raleway.style.fontFamily}
                                        fontWeight={500}
                                    >
                                        Order {data.id}
                                    </Typography>
                                    <Typography
                                        fontSize={'0.8rem'}
                                        color={'#666'}
                                    >
                                        {data.order_date}
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography
                                        bgcolor={'#e6f7e6'}
                                        color={'#2e8b57'}
                                        padding={'4px 8px'}
                                        fontSize={'0.8rem'}
                                        fontWeight={500}
                                        borderRadius={'4px'}
                                    >
                                        {data.status}
                                    </Typography>
                                </Stack>
                            </Stack>
                            {/* body section */}
                            <Stack
                                justifyContent={'space-between'}
                                flexDirection={'row'}
                                alignItems={'center'}
                                padding={3}
                                border={'1px solid #e0e0e0'}
                            >
                                <Stack
                                    flexDirection={'row'}
                                    columnGap={3}
                                    alignItems={'center'}
                                >
                                    <Stack>
                                        <img
                                            src={data.img}
                                            alt="Gold Bracelet"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                objectFit: 'cover',
                                                borderRadius: '4px',
                                                border: '1px solid #e0e0e0'
                                            }}
                                        />
                                    </Stack>
                                    <Stack
                                        spacing={1}
                                    >
                                        <Typography
                                            fontFamily={raleway.style.fontFamily}
                                            fontWeight={500}
                                        >
                                            {data.name}
                                        </Typography>
                                        <Typography
                                            fontFamily={raleway.style.fontFamily}
                                            color="#666"
                                            fontSize={'0.9rem'}
                                        >
                                            {data.description}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Typography>${data.price}</Typography>
                                </Stack>
                            </Stack>
                            {/* footer section */}
                            <Stack
                                flexDirection={'row'}
                                sx={{
                                    borderBottomLeftRadius: '4px',
                                    borderBottomRightRadius: '4px',
                                }}
                                padding={3}
                                border={'1px solid #e0e0e0'}
                                justifyContent={'flex-end'}
                                columnGap={2}
                            >
                                <Button variant="contained">View Details</Button>
                                <Button variant="contained">Buy Again</Button>
                            </Stack>
                        </Stack>
                    ))}
                </Stack> : (
                    <Stack>
                        <Typography>No Order Found</Typography>
                    </Stack>
                )
            }
        </Stack>
    )
}

export default OrdersTab