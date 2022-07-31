import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #e2e1e1;
`;
const Box = styled.div`
  padding: 20px;
`;

const NavItems = styled(NavLink)`
  margin-right: 20px;
  color: black;
  text-decoration: none;
  font-size: 22px;

  &.active {
    color: #f37a7a;
  }
  :hover:not(.active) {
    color: #f37a7a;
  }
`;

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
export const Header = () => {
  return (
    <StyledHeader>
      <Box>
        {navItems.map(({ href, text }) => {
          return (
            <NavItems to={href} key={href}>
              {text}
            </NavItems>
          );
        })}
      </Box>
    </StyledHeader>
  );
};
