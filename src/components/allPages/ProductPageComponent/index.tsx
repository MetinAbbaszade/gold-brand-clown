"use client";
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Stack, TextField, Typography } from "@mui/material"
import { playfair } from "../MainPageCom/page"
import { heroContainerVariants, MotionStack } from "@/components/_common/HeroSection"
import { raleway } from "@/providers/ThemeRegistry"
import { useState } from 'react';


const formatPriceValue = (value: number) => {
    return `$${value.toLocaleString()}`;
};

const getAriaValueText = (value: number) => {
    return `Price is ${formatPriceValue(value)}`;
};


const collectionOptions: CollectionOption[] = [
    { value: '', label: 'All Collections' },
    { value: 'Heritage', label: 'Heritage' },
    { value: 'Modern', label: 'Modern Minimalist' },
    { value: 'Celestial', label: 'Celestial' },
    { value: 'Royal', label: 'Royal Heritage' },
    { value: 'Bridal', label: 'Bridal' },
];

interface CollectionOption {
    value: string;
    label: string;
}


const ProductPageComponent = ({
    minPriceInitial = 100,
    maxPriceInitial = 10000,
    minGlobal = 100,
    maxGlobal = 10000,
    step = 100,
    initialCollection = '',
    label = 'Select Collection',
}) => {

    const [priceRange, setPriceRange] = useState<number[]>([minPriceInitial, maxPriceInitial]);

    const handleRangeChange = (event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    const [selectedCollection, setSelectedCollection] = useState<string>(initialCollection);

    const handleCollectionChange = (event: SelectChangeEvent<string>) => {
        setSelectedCollection(event.target.value);
    };
    const labelId = "collection-filter-label";


    return (
        <MotionStack
            variants={heroContainerVariants}
            initial='hidden'
            animate='visible'
            width={'100vw'}
        >
            {/* Header */}
            <Stack minWidth={'100%'}>
                <Stack
                    bgcolor={'#f5f5f5'}
                    height={'250px'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Stack
                        textAlign={'center'}
                        spacing={5}

                    >
                        <Typography
                            fontSize={'48px'}
                            fontWeight={100}
                            fontFamily={playfair.style.fontFamily}
                        >
                            Jewelry Products
                        </Typography>
                        <Typography
                            variant='subtitle1'
                        >
                            Explore our exquisite gold pieces, handcrafted with precision and passion
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            {/*container for filtering*/}
            <Stack
                m={'4rem auto'}
                width={'65%'}
            >
                {/* search filter */}
                <Stack
                    flexDirection={'row'}
                    m={'1rem 0'}
                >
                    <Stack width={'50%'}>
                        <TextField
                            type="password"
                            variant="outlined"
                            placeholder='Search jewelry...'
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '0',
                                    height: '50px',
                                    transition: '0.2s ease',
                                    '& fieldset': { borderColor: '#e0e0e0' },
                                    '&:hover fieldset': { borderColor: '#e0e0e0' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#d4af37',
                                        boxShadow: '0 0 0 2px rgba(212, 175, 55, 0.2)',
                                    },
                                },
                                fontFamily: raleway.style.fontFamily,
                                fontSize: '1rem',
                            }}
                        />
                    </Stack>
                    <Stack alignItems={'center'} justifyContent={'center'} width={'50px'} bgcolor={'#d4af38'}>
                        <SearchIcon sx={{ color: '#fff' }} />
                    </Stack>
                </Stack>
                {/* collection and price range filter */}
                <Stack
                    flexDirection={'row'}
                    columnGap={5}
                    alignItems={'center'}
                >
                    {/* collection filter */}
                    <Box
                        sx={{
                            width: 250,
                            m: '2rem 0',
                            p: 2,
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            bgcolor: 'background.paper'
                        }}
                    >
                        <FormControl
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel id={labelId}>{label}</InputLabel>
                            <Select
                                labelId={labelId}
                                value={selectedCollection}
                                label={label}
                                onChange={handleCollectionChange}
                                sx={{

                                    '&.MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#B8860B',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#C49000',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#B8860B',
                                            borderWidth: '2px',
                                        }
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: '#B8860B',
                                    },
                                    color: 'text.primary',
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: 'background.paper',
                                            border: '1px solid #B8860B',
                                        },
                                    },
                                }}
                            >
                                {collectionOptions.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                        sx={{
                                            '&.Mui-selected': {
                                                bgcolor: 'rgba(184, 134, 11, 0.1)',
                                                color: '#B8860B',
                                                '&:hover': {
                                                    bgcolor: 'rgba(184, 134, 11, 0.15)',
                                                },
                                            },
                                            '&:hover': {
                                                bgcolor: 'rgba(184, 134, 11, 0.05)',
                                            },
                                        }}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    {/* price range filter */}
                    <Box
                        sx={{
                            width: '80%',
                            p: 2,
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            bgcolor: 'background.paper'
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            sx={{ mb: 2, fontWeight: 'bold' }}
                        >
                            Price Range:
                        </Typography>

                        <Stack
                            sx={{ px: 1 }}
                        >
                            <Slider
                                value={priceRange}
                                onChange={handleRangeChange}
                                min={minGlobal}
                                max={maxGlobal}
                                step={step}
                                valueLabelDisplay="auto"
                                valueLabelFormat={formatPriceValue}
                                getAriaLabel={() => 'Price range'}
                                getAriaValueText={getAriaValueText}
                                disableSwap
                                sx={{
                                    color: '#B8860B',
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: '#fff',
                                        border: '2px solid currentColor',
                                        '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                            boxShadow: '0px 0px 0px 8px rgba(184, 134, 11, 0.16)',
                                        },
                                    },
                                    '& .MuiSlider-rail': {
                                        color: '#ccc',
                                    },
                                }}
                            />
                        </Stack>

                        <Box
                            className="price-values"
                            sx={{
                                mt: 2,
                                textAlign: 'center'
                            }}
                        >
                            <Typography component="span" variant="body1" sx={{ fontWeight: 'medium' }}>
                                {formatPriceValue(priceRange[0])}
                            </Typography>
                            <Typography component="span" variant="body1" sx={{ mx: 1 }}>
                                -
                            </Typography>
                            <Typography component="span" variant="body1" sx={{ fontWeight: 'medium' }}>
                                {formatPriceValue(priceRange[1])}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </MotionStack>
    )
}

export default ProductPageComponent