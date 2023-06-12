import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Manager'];
  const roles = ['Manager', 'Manager', 'Member', 'Customer'];
  const applicationName = 'Chefkoch';
  const tenantName = 'Restaurant';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Manager:
1. As a Manager, I want to create a new Restaurant profile, so that I can showcase my restaurant to potential customers.
2. As a Manager, I want to edit my Restaurant profile, so that I can keep the information up-to-date.
3. As a Manager, I want to delete my Restaurant profile, so that I can remove it from the platform if needed.
4. As a Manager, I want to invite Members to join my Restaurant, so that they can help manage the restaurant on the platform.
5. As a Manager, I want to remove Members from my Restaurant, so that I can maintain control over who has access to the restaurant's information.

Member:
1. As a Member, I want to view the Restaurant profile, so that I can stay informed about the restaurant's details.
2. As a Member, I want to edit the Restaurant profile, so that I can help keep the information up-to-date.
3. As a Member, I want to view and manage reservations, so that I can ensure a smooth dining experience for our customers.

Customer:
1. As a Customer, I want to search for Restaurants, so that I can find a suitable place to dine.
2. As a Customer, I want to view Restaurant profiles, so that I can learn more about the restaurant and its offerings.
3. As a Customer, I want to make a reservation at a Restaurant, so that I can secure a table for my desired date and time.
4. As a Customer, I want to edit my reservation, so that I can make changes to the date, time, or number of guests.
5. As a Customer, I want to cancel my reservation, so that I can free up the table for other diners if my plans change.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
