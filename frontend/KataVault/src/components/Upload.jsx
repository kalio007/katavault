import { Container } from '@chakra-ui/react';
import { Card, Heading, Text, Button, SimpleGrid, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function Upload(){
    return (
    <Container>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>Upload</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>Uplaod</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>Upload</Button>
            </CardFooter>
        </Card>
        </SimpleGrid>
    </Container>
  )
}

export default Upload;