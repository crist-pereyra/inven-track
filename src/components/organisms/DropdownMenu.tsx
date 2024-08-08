import styled from 'styled-components';
import { Icon, v } from '../../index';

interface Props {
  data: any;
  top: string;
  action: any;
}
interface MenuProps {
  top: string;
}
export function DropdownMenu({ data, top, action }: Props) {
  return (
    <Container top={top}>
      {data.map((item: any, index: any) => {
        return (
          <Dropdown key={index} onClick={() => action(item)}>
            <Icon>{item.icon}</Icon>
            <span>{item.text}</span>
          </Dropdown>
        );
      })}
    </Container>
  );
}
const Container = styled.div<MenuProps>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.top};
  box-shadow: ${() => v.boxShadowGray};
  z-index: 1;
`;
const Dropdown = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.bg4};
  }
  svg {
    font-size: 28px;
    display: block;
  }
`;
