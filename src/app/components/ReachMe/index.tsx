import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { z } from 'zod';

import { createTransport } from 'nodemailer';

export default function ReachMe() {

    async function sendEmail(data: FormData) {
        // use zod to validate the data
        const schema = z.object({
            name: z.string().min(3),
            email: z.string().email(),
            message: z.string().min(10)
        });

        const result = schema.safeParse(data);

        if (!result.success) {
            return result.error.errors;
        } else {
            // send the email
            createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            });

        }
    }

    return (
        <Box p={8} bg='#fff1' borderRadius='lg' overflow='hidden'>
            <h4 className='text-3xl font-bold'>Let's work together !</h4>
            <h6 className='text-xl opacity-70'>I'll be happy to hear from you.</h6>
            <form action={sendEmail} className='mt-5 flex flex-col gap-4'>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name='name' colorScheme='yellow' placeholder='John Smith' bg='#fff1' p={4} variant='flushed' type='text' />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input name='email' colorScheme='yellow' placeholder='john.smith@gmail.com' bg='#fff1' p={4} variant='flushed' type='email' />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>What interests you ?</FormLabel>
                    <Textarea _after={{
                        _focus: {
                            borderBottom: '2px solid red'
                        }
                    }} colorScheme='yellow' bg='#fff1' placeholder='Talk to me!' p={4} variant='flushed' />
                </FormControl>

                <Button colorScheme='yellow' className='self-end' type='submit'>Send</Button>
            </form>
        </Box>
    );
}
