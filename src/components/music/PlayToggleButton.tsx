import React from 'react';

import PlayIcon from '../../assets/images/ic-small-fill-play-gray.png';
import PauseIcon from '../../assets/images/ic-small-line-stop-gray.png';
import Spin from '../common/Spin';

import { S } from './PlayToggleButton.styled';

type Props = {
  playing: boolean;
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
};

const PlayToggleButton = ({ playing, onClick, loading, disabled }: Props) => {
  if (loading) {
    return <Spin />;
  }

  const imgSrc = playing ? PauseIcon : PlayIcon;
  const imgAlt = playing ? '정지' : '재생';
  return (
    <S.Button type="button" onClick={onClick} disabled={disabled ?? false}>
      <img src={imgSrc} alt={imgAlt} />
    </S.Button>
  );
};

export default React.memo(PlayToggleButton);