import { Container } from "@chakra-ui/react"
import NavBar from "./NavBar"
import Upload from "./Upload"

function Profile() {
  return (
    <Container>
      <NavBar />
      <Upload/>
    </Container>
  )
}

export default Profile