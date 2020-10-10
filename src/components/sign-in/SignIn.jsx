import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SignInStyles'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Logo</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1 >Sign in to your account</FormH1>
                            <FormLabel>Email</FormLabel>
                            <FormInput type='email' required></FormInput>
                            <FormLabel >Password</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormButton>Sign In</FormButton>
                            <Text>Forgot your password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
