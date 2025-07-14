import { raleway } from '@/providers/ThemeRegistry'
import { Box, Button, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { AuthContext } from '@/context/AuthContext';

const ProfileTab = () => {

    const [isDisabled, setIsDisabled] = useState<Array<string>>([])

    const { logOutFunction } = useContext(AuthContext)

    const handleClick = (label: string) => {
        setIsDisabled(prev => {
            if (prev.includes(label)) {
                return prev.filter(d => d !== label);
            } else {
                return [...prev, label];
            }
        });

    }

    return (
        <Stack
            spacing={3}
        >
            {['Full Name', 'Email', 'Adress'].map((label) => (
                <Stack key={label}>
                    <Typography
                        fontSize={'0.9rem'}
                        mb={1}
                        color='#666'
                        fontFamily={raleway.style.fontFamily}
                        fontWeight={500}
                    >
                        {label}
                    </Typography>
                    <Stack position={'relative'} border='none' sx={{ cursor: 'not-allowed' }}>
                        {label === 'Adress' ? (
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Required"
                                style={{
                                    width: '100%',
                                    backgroundColor: !isDisabled.includes(label) ? '#f6f6f6' : '#fff',
                                    padding: '10px',
                                    border: '1px solid rgba(118, 118, 118, 0.3)',
                                    borderRadius: '5px'
                                }}
                            />
                        ) : (
                            <TextField
                                disabled={!isDisabled.includes(label)}
                                required
                                id="outlined-required"
                                placeholder="Required"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px',
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
                                    bgcolor: !isDisabled.includes(label) ? '#f6f6f6' : '#fff',
                                }}
                            />
                        )}

                        <Button sx={{
                            position: 'absolute',
                            right: '0px',
                            minWidth: 0,
                            width: '30px',
                            padding: '10px',
                        }}
                            size="small"
                            onClick={() => handleClick(label)}
                        >
                            {
                                !isDisabled.includes(label)
                                    ?
                                    <EditIcon sx={{ fontSize: '15px', color: '#9e7c0c' }} />
                                    :
                                    <DoneIcon sx={{ fontSize: '15px', color: '#9e7c0c' }} />
                            }
                        </Button>
                    </Stack>
                </Stack>
            ))}
            <Stack flexDirection={'row'} justifyContent={'space-between'} p={'1rem 0'}>
                <Stack>
                    <Button
                        variant='contained'
                        sx={{
                            background: 'linear-gradient(to right, #9e7c0c, #d4af37)'
                        }}
                        disabled={!isDisabled.length}
                    >
                        Save Changes
                    </Button>
                </Stack>
                <Stack>
                    <Button variant='contained' sx={{ bgcolor: 'inherit', color: '#000' }} onClick={() => logOutFunction()}>Logout</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProfileTab