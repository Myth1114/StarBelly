import React from 'react'
import { Container,Text,LeftBox,RightBox,Heading,Message,Form,Label,Input,Para } from './contact.styles'
const contact = () => {
  return (
    <Container>
        <LeftBox>
        <Text>
        <Heading>Get in Touch with Starbelly</Heading>
        <Para>Consectetur numquam poro nemo veniam
eligendi rem adipisci quo modi.</Para>
        </Text>
        </LeftBox>
        <RightBox>
            <Text>
               <Message>Send Message</Message>
            </Text>
            <Form>
                <Label>Name</Label>
                <Input type='text' placeholder='name'></Input>
                <Label>Message</Label>
                <Input type='text' placeholder='message'></Input>
            </Form>
        </RightBox>
    </Container>
  )
}

export default contact