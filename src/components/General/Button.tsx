import { Button as CButton, Text } from '@chakra-ui/react'

const Button = (props) => {
  const { icon, s, h, w, children } = props
  return (
    <CButton
      leftIcon={icon}
      size={s}
      h={h}
      w={w}
      bg="#f2f2f2"
      variant="outline"
      colorScheme="gray"
      _hover={{ backgroundColor: '#d8d8d8' }}
    >
      <Text p="10px">{children}</Text>
    </CButton>
  )
}

export default Button
