import { Button, Grid, Stack, Typography } from "@mui/material"
import { IProp } from "../CollectionCard"

const FeaturedCollection: React.FC<IProp> = ({ data: { name, longDescription, image }, playfair, montserrat }) => {
    return (
        <Stack
            height={'500px'}
            bgcolor={'#f5f5f5'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Grid
                container
                width={'80%'}
                height={'70%'}
                columnSpacing={4}
            >
                <Grid size={{ md: 6 }}>
                    <Stack
                        spacing={3}
                        height={'100%'}
                        justifyContent={'center'}
                    >
                        <Typography
                            color="#d4af36"
                            textTransform={'uppercase'}
                            fontFamily={"'Cormorant Garamond', serif"}
                            letterSpacing={1}
                            variant="h6"
                            fontWeight={100}
                        >
                            Featured Collection
                        </Typography>
                        <Typography
                            fontFamily={playfair?.style.fontFamily}
                            variant="h4"
                            color="#222222"
                        >
                            {name}
                        </Typography>
                        <Typography
                            fontFamily={montserrat?.style.fontFamily}
                            letterSpacing={1}
                            lineHeight={1.5}
                        >{longDescription}
                        </Typography>
                        <Button
                            href="/products"
                            variant="outlined"
                            sx={{
                                width: '200px',
                                color: '#d4af36',
                                border: '1px solid #d4af36'
                            }}
                        >
                            Discover Now
                        </Button>
                    </Stack>
                </Grid>
                <Grid size={{ md: 6 }}>
                    <Stack
                        width={'100%'}
                        height={'100%'}
                        sx={{
                            backgroundImage: `url("${image}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            objectFit: 'cover'
                        }}
                        boxShadow={3}
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default FeaturedCollection