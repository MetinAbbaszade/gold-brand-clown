import { raleway } from '@/providers/ThemeRegistry'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
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
                        <TextField
                            disabled={!isDisabled.includes(label)}
                            required
                            id="outlined-required"
                            placeholder="Required"
                            sx={{
                                bgcolor: !isDisabled.includes(label) ? '#f6f6f6' : '#fff',
                            }}
                        />
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