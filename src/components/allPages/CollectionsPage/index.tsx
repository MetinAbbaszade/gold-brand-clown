import { getAllCollections } from "@/api/collection"
import CollectionCard from "@/components/_common/CollectionCard"
import CollectionFooter from "@/components/_common/CollectionFooter"
import FeaturedCollection from "@/components/_common/FeaturedCollection"
import { Grid, Stack, Typography } from "@mui/material"
import { NextFont } from "next/dist/compiled/@next/font"
import React from "react"

interface IProp {
    playfair: NextFont
}

export interface IData {
    id: number
    name: string
    description: string
    longDescription: string
    image: string,
    link: string
}

const CollectionsPage: React.FC<IProp> = async ({ playfair }) => {
    const datas: IData[] = await getAllCollections()

    return (
        <Stack minWidth={'100%'}>
            <Stack
                bgcolor={'#f5f5f5'}
                height={'350px'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Stack
                    textAlign={'center'}
                    spacing={5}
                    width={'40%'}
                >
                    <Typography
                        fontSize={'48px'}
                        fontWeight={100}
                        fontFamily={playfair.style.fontFamily}
                    >
                        Our Collections
                    </Typography>
                    <Typography
                        variant='subtitle1'
                    >
                        Discover our exquisite gold creations, each piece telling a unique story of craftsmanship and elegance
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                p={'50px 0'}
                alignItems={'center'}
            >
                <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={5}
                    width={'70%'}
                >
                    {datas.map((data) => (
                        <Grid key={data.id} size={{ md: 4 }}>
                            <CollectionCard data={data} playfair={playfair} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            <Stack>
                <FeaturedCollection data={datas[Math.floor(Math.random() * 9)]} playfair={playfair} />
            </Stack>
            <Stack>
                <CollectionFooter playfair={playfair} />
            </Stack>
        </Stack>
    )
}

export default CollectionsPage