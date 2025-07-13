import { playfair_display, raleway } from "@/providers/ThemeRegistry"
import { Box, Button, Container, Stack, Typography } from "@mui/material"

const OrdersTab = () => {
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
            <Stack spacing={4}>
                <Stack>
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
                                Order #GLD-9876
                            </Typography>
                            <Typography
                                fontSize={'0.8rem'}
                                color={'#666'}
                            >
                                June 12, 2023
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
                                Delivered
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
                                    src="https://www.pix-star.com/blog/wp-content/uploads/2021/05/digital-photo-frames.jpg"
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
                                    18K Gold Bracelet
                                </Typography>
                                <Typography
                                    fontFamily={raleway.style.fontFamily}
                                    color="#666"
                                    fontSize={'0.9rem'}
                                >
                                    Hand-crafted elegant bracelet
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Typography>$3.499</Typography>
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
            </Stack>
        </Stack>
    )
}

export default OrdersTab