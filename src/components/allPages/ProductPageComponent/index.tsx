"use client";
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Stack, TextField, Typography } from "@mui/material";
import { playfair } from "../MainPageCom/page";
import { heroContainerVariants, MotionStack } from "@/components/_common/HeroSection";
import { raleway } from "@/providers/ThemeRegistry";
import { useState, useCallback, useMemo } from 'react';


const COLLECTION_OPTIONS: CollectionOption[] = [
    { value: '', label: 'All Collections' },
    { value: 'Heritage', label: 'Heritage' },
    { value: 'Modern', label: 'Modern Minimalist' },
    { value: 'Celestial', label: 'Celestial' },
    { value: 'Royal', label: 'Royal Heritage' },
    { value: 'Bridal', label: 'Bridal' },
];

const SLIDER_SX = {
    color: '#B8860B',
    '& .MuiSlider-thumb': {
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: '0px 0px 0px 8px rgba(184, 134, 11, 0.16)',
        },
    },
    '& .MuiSlider-rail': { color: '#ccc' },
};

const MENU_ITEM_SX = {
    '&.Mui-selected': {
        bgcolor: 'rgba(184, 134, 11, 0.1)',
        color: '#B8860B',
        '&:hover': { bgcolor: 'rgba(184, 134, 11, 0.15)' },
    },
    '&:hover': { bgcolor: 'rgba(184, 134, 11, 0.05)' },
};

const TEXT_FIELD_SX = {
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
};

interface CollectionOption {
    value: string;
    label: string;
}

interface ProductPageComponentProps {
    minPriceInitial?: number;
    maxPriceInitial?: number;
    minGlobal?: number;
    maxGlobal?: number;
    step?: number;
    initialCollection?: string;
    label?: string;
}


const formatPriceValue = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

const getAriaValueText = (value: number) => `Price is ${formatPriceValue(value)}`;

const LABEL_ID = "collection-filter-label";


const ProductPageComponent = ({
    minPriceInitial = 100,
    maxPriceInitial = 10000,
    minGlobal = 100,
    maxGlobal = 10000,
    step = 100,
    initialCollection = '',
    label = 'Select Collection',
}: ProductPageComponentProps) => {

    const [priceRange, setPriceRange] = useState<number[]>([minPriceInitial, maxPriceInitial]);
    const [selectedCollection, setSelectedCollection] = useState<string>(initialCollection);

    const handleRangeChange = (_: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    const handleCollectionChange = (event: SelectChangeEvent<string>) => {
        setSelectedCollection(event.target.value);
    };

    const formattedMin = useMemo(() => formatPriceValue(priceRange[0]), [priceRange[0]]);
    const formattedMax = useMemo(() => formatPriceValue(priceRange[1]), [priceRange[1]]);

    return (
        <MotionStack variants={heroContainerVariants} initial='hidden' animate='visible' width='100vw'>
            <Stack
                bgcolor='#f5f5f5'
                height='250px'
                alignItems='center'
                justifyContent='center'
            >
                <Stack textAlign='center' spacing={5}>
                    <Typography
                        fontSize='48px'
                        fontWeight={100}
                        fontFamily={playfair.style.fontFamily}
                    >
                        Jewelry Products
                    </Typography>
                    <Typography variant='subtitle1'>
                        Explore our exquisite gold pieces, handcrafted with precision and passion
                    </Typography>
                </Stack>
            </Stack>
                  <Stack m='4rem auto' width='65%'>
                <Stack flexDirection='row' m='1rem 0'>
                    <TextField
                        variant="outlined"
                        placeholder='Search jewelry...'
                        sx={{ ...TEXT_FIELD_SX, width: '50%' }}
                    />
                    <Stack alignItems='center' justifyContent='center' width='50px' bgcolor='#d4af38'>
                        <SearchIcon sx={{ color: '#fff' }} />
                    </Stack>
                </Stack>
                <Stack flexDirection='row' columnGap={5} alignItems='center'>
                    <Box sx={{ width: 250, m: '2rem 0', border: '1px solid #e0e0e0', borderRadius: '8px', bgcolor: 'background.paper' }}>
                        <FormControl fullWidth>
                            <InputLabel id={LABEL_ID}>{label}</InputLabel>
                            <Select
                                labelId={LABEL_ID}
                                value={selectedCollection}
                                label={label}
                                onChange={handleCollectionChange}
                            >
                                {COLLECTION_OPTIONS.map(({ value, label }) => (
                                    <MenuItem key={value} value={value} sx={MENU_ITEM_SX}>
                                        {label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ width: '80%', p: 2, border: '1px solid #e0e0e0', borderRadius: '8px', bgcolor: 'background.paper' }}>
                        <Typography gutterBottom variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                            Price Range:
                        </Typography>
                        <Stack sx={{ px: 1 }}>
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
                                sx={SLIDER_SX}
                            />
                        </Stack>
                        <Stack direction='row' justifyContent='center' alignItems='center' mt={2} spacing={1}>
                            <Typography component="span" variant="body1" fontWeight="medium">{formattedMin}</Typography>
                            <Typography component="span" variant="body1">-</Typography>
                            <Typography component="span" variant="body1" fontWeight="medium">{formattedMax}</Typography>
                        </Stack>
                    </Box>

                </Stack>
            </Stack>
        </MotionStack>
    );
};

export default ProductPageComponent;