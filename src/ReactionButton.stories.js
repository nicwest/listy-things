import React from 'react';
import ReactionButton from './ReactionButton';

export default {
  title: 'Buttons/Reaction',
  component: ReactionButton,
};

export const Reaction = () => <ReactionButton
  reaction="smiley"
  n={123}
  active={false} />;
