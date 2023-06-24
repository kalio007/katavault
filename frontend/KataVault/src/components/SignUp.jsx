import { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Card, CardHeader, CardBody, CardFooter,
  } from '@chakra-ui/react';
  import {
    Input,
    InputGroup,
    InputAddon,
    InputLeftAddon,
    InputRightAddon,
    // InputElement,
    InputLeftElement,
    InputRightElement,
  } from "@chakra-ui/input"


function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [input, setInput] = useState('')

    //const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  

    //signup
    const signupUser = async (e) => {
        e.preventDefault() //we use this method because we are sendong infromation to the backend and we dont wanrto clear it on refresh
        const result = account.create(
            uuidv4(),
            user.email,
            user.name
        );
        result.then(function (response) {
            console.log(response);
            // if it is successful we want to navigate to a different page
            navigate("/profile") //success
         }, function (error) {
            console.log(error);
         });
    }
    
  return (
    <Card maxW='sm'>
        <CardBody>
        <form action = '#' method='POST'>
            <div>
                <label
                htmlFor='name'
                className=''
                >
                    Name
                </label>
                <div>
                    <Input
                      id='name'
                      name='name'
                      type='text'
                      autoComplete='name'
                      required
                      onChange={(e) => {
                        setUser({
                        ...user,
                        name: e.target.value
                    })}}
                    />

                </div>
            </div>
            <div>
                {/* <label
                htmlFor='name'
                className=''
                >
                    Email
                </label> */}
                <div>
                    {/* <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      onChange={(e) => { 
                        setUser({
                        ...user,
                        email: e.target.value
                    })}}
                    /> */}
                    <FormControl isInvalid={isError}>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            required
                            type='email' 
                            // value={input} 
                            onChange={(e) => { 
                                setUser({
                                ...user,
                                email: e.target.value
                            })}} 
                        />
                        {!isError ? (
                            <FormHelperText>
                            Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>                   
                </div>
            </div>
            <div>
                {/* <label
                htmlFor='password'
                className=''
                >
                    Password
                </label> */}
                <div>
                    {/* <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      onChange={(e) => { 
                        setUser({
                        ...user,
                        password: e.target.value
                    })}}
                    /> */}
                    <InputGroup size='md'>
                        <Input
                            id='password'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            onChange={(e) => { 
                                setUser({
                                ...user,
                                password: e.target.value
                            })}}
                            required

                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
            </div>
            <CardFooter>
                <Button
                    type='submit'
                    onClick={signupUser}
                    variant='solid' 
                    colorScheme='blue'
                >
                    Sign Up
                </Button>
            </CardFooter>
        </form>
        </CardBody>
    </Card>
  )
}

export default SignUp