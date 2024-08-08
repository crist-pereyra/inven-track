import styled from 'styled-components';

interface Props {
  icon: JSX.Element;
  width: string;
  height: string;
  bgColor: string;
  textColor: string;
  fontSize: string;
  translateX: string;
  translateY: string;
}
interface ContainerProps {
  $bgColor: string;
  $textColor: string;
  height: string;
  width: string;
  $fontSize: string;
  $translateX: string;
  $translateY: string;
}
export function CircularButton({
  icon,
  width,
  height,
  bgColor,
  textColor,
  fontSize,
  translateX,
  translateY,
}: Props) {
  return (
    <Container
      $bgColor={bgColor}
      $textColor={textColor}
      height={height}
      width={width}
      $fontSize={fontSize}
      $translateX={translateX}
      $translateY={translateY}
    >
      <span>{icon}</span>
    </Container>
  );
}
const Container = styled.div<ContainerProps>`
  background: ${(props) => props.$bgColor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(${(props) => props.$translateX})
    translateY(${(props) => props.$translateY});

  span {
    font-size: ${(props) => props.$fontSize};
    text-align: center;
    color: ${(props) => props.$textColor};
  }
`;
