// import SideMenuContainer from 'components/Navigation/SideMenu'

import { HStack, Stack, Divider, VStack, Box } from '@chakra-ui/react'
export default function Layout({ children }) {
  return (
    <>
      <HStack>
        <Stack direction="row" h="100vh">
          <Divider orientation="vertical" />
          <VStack>
            <Box pl="40px" pt="60px">
              <main>{children}</main>
            </Box>
          </VStack>
        </Stack>
      </HStack>
    </>
  )
}
