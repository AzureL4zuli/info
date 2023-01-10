import { Container, Heading, Link, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'

const PageRoot: NextPage = () => {
  return (
    <>
      <HStack spacing="10px">
        <Container padding="10">
          <Heading mb={10}>学科紹介</Heading>
          <NextLink href="/infomation" passHref>
            <Link>情報システムコース</Link>
          </NextLink>
        </Container>
      </HStack>
    </>
  )
}

export default PageRoot
