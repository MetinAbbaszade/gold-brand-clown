"use client";
import { Stack } from '@mui/material';
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Switch } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { raleway } from '@/providers/ThemeRegistry';
import { useState } from 'react';

export default function SettingsTab({
    onSubmit = () => { },
}) {

    const [emailUpdates, setEmailUpdates] = useState(true)
    const [orderUpdates, setOrderUpdates] = useState(true)

    return (
        <Box
            component="section"
            sx={{
                p: '2rem',
            }}
        >
            <Typography
                component="h3"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mb: '2rem',
                }}
            >
                Account Settings
            </Typography>

            <Stack
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >

                <Box
                    sx={{
                        mb: '2rem',
                        pb: '1.5rem',
                        borderBottom: '1px solid #e0e0e0',
                    }}
                >
                    <Typography
                        component="h4"
                        sx={{
                            fontFamily: raleway.style.fontFamily,
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            mb: '1.5rem',
                            color: '#1a1a1a',
                        }}
                    >
                        Notifications
                    </Typography>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        sx={{ mb: '1.5rem' }}
                    >
                        <Box>
                            <Typography
                                component="h5"
                                sx={{ fontWeight: 500, fontSize: '1rem', mb: '2px' }}
                            >
                                Email Updates
                            </Typography>
                            <Typography sx={{ color: '#666', fontSize: '0.85rem' }}>
                                Receive updates about new products and exclusive offers
                            </Typography>
                        </Box>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={emailUpdates}
                                    onChange={() => setEmailUpdates((t) => !t)}
                                    sx={{
                                        '& .MuiSwitch-switchBase': {
                                            transition: '0.2s ease',
                                            '&.Mui-checked': {
                                                transform: 'translateX(24px)',
                                                color: '#fff',
                                                '& + .MuiSwitch-track': {
                                                    backgroundColor: '#d4af37',
                                                },
                                            },
                                        },
                                        '& .MuiSwitch-track': {
                                            borderRadius: 34,
                                            backgroundColor: '#e0e0e0',
                                            transition: '0.2s ease',
                                        },
                                    }}
                                />
                            }
                            label=""
                        />
                    </Stack>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Box>
                            <Typography
                                component="h5"
                                sx={{ fontWeight: 500, fontSize: '1rem', mb: '2px' }}
                            >
                                Order Updates
                            </Typography>
                            <Typography sx={{ color: '#666', fontSize: '0.85rem' }}>
                                Get notifications about your order status
                            </Typography>
                        </Box>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={orderUpdates}
                                    onChange={() => setOrderUpdates((t) => !t)}
                                    sx={{
                                        '& .MuiSwitch-switchBase': {
                                            transition: '0.2s ease',
                                            '&.Mui-checked': {
                                                transform: 'translateX(24px)',
                                                color: '#fff',
                                                '& + .MuiSwitch-track': {
                                                    backgroundColor: '#d4af37',
                                                },
                                            },
                                        },
                                        '& .MuiSwitch-track': {
                                            borderRadius: 34,
                                            backgroundColor: '#e0e0e0',
                                            transition: '0.2s ease',
                                        },
                                    }}
                                />
                            }
                            label=""
                        />
                    </Stack>
                </Box>

                <Box
                    sx={{
                        mb: '2rem',
                        pb: '1.5rem',
                        borderBottom: '1px solid #e0e0e0',
                    }}
                >
                    <Typography
                        component="h4"
                        sx={{
                            fontFamily: raleway.style.fontFamily,
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            mb: '1.5rem',
                            color: '#1a1a1a',
                        }}
                    >
                        Security
                    </Typography>

                    {[
                        { id: 'currentPassword', label: 'Current Password' },
                        { id: 'newPassword', label: 'New Password' },
                        { id: 'confirmPassword', label: 'Confirm New Password' },
                    ].map(({ id, label }) => (
                        <Box key={id} sx={{ mb: '1.5rem' }}>
                            <Typography
                                component="label"
                                htmlFor={id}
                                sx={{
                                    display: 'block',
                                    fontSize: '0.9rem',
                                    mb: 'var(--spacing-xs)',
                                    color: '#666',
                                    fontWeight: 500,
                                }}
                            >
                                {label}
                            </Typography>
                            <TextField
                                id={id}
                                type="password"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 'var(--radius-sm)',
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
                        </Box>
                    ))}
                </Box>

                <Box>
                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                            background: 'linear-gradient(to right, #9e7c0c, #d4af37)',
                            color: '#fff',
                            py: '1rem',
                            borderRadius: '4px',
                            fontFamily: raleway.style.fontFamily,
                            fontWeight: 500,
                            letterSpacing: '0.5px',
                            mt: '1.5rem',
                            transition: '0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(to right, #d4af37, #f2e6c2)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            },
                        }}
                    >
                        Update Settings
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
