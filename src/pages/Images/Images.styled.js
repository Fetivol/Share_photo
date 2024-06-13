import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.red};
  border: ${props => props.theme.radii.sm} solid
    ${props => props.theme.colors.green};
`;

export const ImagesWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${props => props.theme.spacing(3)};
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(2)};
`;
