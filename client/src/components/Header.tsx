import { Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        margin={{ base: '10px 20px', md: '10px 50px' }}
        style={style}
      >
        <Heading
          as="h1"
          fontSize={{ base: '24px', md: '48px' }}
          onClick={() => navigate('/')}
          _hover={{ cursor: 'pointer' }}
        >
          <Image
            width={{ base: '50%', md: '30%' }}
            src=""
          />
        </Heading>
      </Flex>
    </>
  );
};

export default Header;
