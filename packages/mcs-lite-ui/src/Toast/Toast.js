import React from 'react';
import PropTypes from 'prop-types';
import { opacity } from 'mcs-lite-theme';
import R from 'ramda';
import Card from '../Card';
import P from '../P';

const lighten = opacity(0.1);

const mapColorByKind = R.cond([
  [R.propEq('kind', 'default'), R.path(['theme', 'color', 'grayDark'])],
  [R.T, props => R.path(['theme', 'color', props.kind])],
]);

export const StyledCard = Card.extend`
  border: 1px solid ${mapColorByKind};
  background-color: rgba(255, 255, 255, 0.9);
`;

export const StyledP = P.extend`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: ${mapColorByKind};
  background-color: ${props => lighten(props.theme.color[props.kind])};
`;

const Toast = ({ children, kind, ...otherProps }) => (
  <StyledCard {...otherProps} kind={kind}>
    <StyledP kind={kind}>{children}</StyledP>
  </StyledCard>
);

Toast.displayName = 'Toast';
Toast.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string,
};
Toast.defaultProps = {
  kind: 'primary',
};

export default Toast;
