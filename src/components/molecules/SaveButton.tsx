import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { FastOmit } from 'styled-components';
import { Icon } from '../atoms/Icon';
interface Props {
  action?: () => void;
  title: string;
  bgColor: string;
  icon?: JSX.Element;
  url?: string;
  type?: 'button' | 'submit' | 'reset';
}
interface ContainerProps
  extends FastOmit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'ref'
  > {
  $bgColor: string;
}
export function SaveButton({
  action,
  title,
  bgColor,
  icon,
  url,
  type = 'submit',
}: Props) {
  return (
    <Container type={type} $bgColor={bgColor}>
      <Icon>{icon}</Icon>

      <span className='btn' onClick={action}>
        <a href={url} target='_blank'>
          {title}
        </a>
      </span>
    </Container>
  );
}
const Container = styled.button<ContainerProps>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  background-color: initial;
  z-index: 2;
  cursor: pointer;
  .btn {
    background: ${(props) => props.$bgColor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    a {
      text-decoration: none;
      color: #000;
    }
    cursor: pointer;
    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }
`;
