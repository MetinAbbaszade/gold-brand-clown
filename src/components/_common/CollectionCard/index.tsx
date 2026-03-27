import { IData } from "@/components/allPages/CollectionsPage"
import { Button, Stack, Typography } from "@mui/material"
import { NextFont } from "next/dist/compiled/@next/font"

export interface IProp {
    data: IData
    playfair?: NextFont
}

const CollectionCard: React.FC<IProp> = ({ data: { name, description, image }, playfair }) => {
    return (
        <Stack
            minWidth={'300px'}
            boxShadow={2}
            borderRadius={'10px'}
            sx={{
                '&:hover': {
                    transform: 'translateY(-7px)',
                    '& .button': {
                        display: 'block'
                    }
                },
                transition: 'transform 0.25s ease'
            }}
        >



            <Stack
                position='relative'
                height='300px'
                sx={{
                    '&:hover .button': {
                        opacity: 1,
                        visibility: 'visible',
                    }
                }}
            >
                <Stack
                    className='button'
                    position='absolute'
                    width='100%'
                    height='100%'
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                        opacity: 0,
                        visibility: 'hidden',
                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    }}
                >
                    <Button
                        href="/products"
                        variant='contained'
                        sx={{
                            bgcolor: '#D4AF37',
                            p: '10px 30px',
                            maxWidth: '100px'
                        }}
                    >
                        Explore
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        backgroundImage: `url("${image}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100%',
                        objectFit: 'cover',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px'
                    }} />
            </Stack>
            <Stack
                p={'2em'}
            >
                <Typography
                    fontFamily={playfair!.style.fontFamily}
                    fontSize={'22px'}
                    color={"#222"}
                    mb={'10px'}
                >
                    {name}
                </Typography>
                <Typography
                    variant='body2'
                >
                    {description}
                </Typography>
            </Stack>
        </Stack >
    )
}

export default CollectionCard