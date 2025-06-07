import { Button, Stack, TextField, Typography } from "@mui/material"
import { IProp, MotionStack } from "../HeroSection"
import { containerFramer } from "../MainAboutSection"

const SubscribeSection: React.FC<IProp> = ({ playfair, montserrat }) => {
    return (
        <MotionStack
            variants={containerFramer}
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: true, amount: 0.5 }}
            minHeight={'400px'}
            bgcolor={'#1a1a1a'}
            spacing={5}
            color={'#fff'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Stack
                maxWidth={'600px'}
                textAlign={'center'}
                spacing={4}
            >

                <Typography
                    fontFamily={playfair.style.fontFamily}
                    variant='h4'
                >Join Our Inner Circle</Typography>
                <Typography
                    fontFamily={montserrat?.style.fontFamily}
                >
                    Be the first to receive exclusive updates, private event invitations, and collection previews.
                    Your Email Address
                </Typography>
                <Stack direction={'row'}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Your Email Address"
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '56px',
                                color: '#c2c2c2',
                                backgroundColor: '#313131',
                                borderRadius: '0'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#888',
                            },

                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#d4af38',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#d4af38',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#aaa',
                            },
                            width: '70%',
                        }}
                    />
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '0',
                            bgcolor: '#d4af36',
                            width: '30%'
                        }}
                    >Subscribe</Button>
                </Stack>
            </Stack>
        </MotionStack>
    )
}

export default SubscribeSection