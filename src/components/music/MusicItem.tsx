import React from 'react';

import { Audio } from '../../hooks/useAudio';
import { Music } from '../../types/music';
import { PlayToggleButton } from '../index';

import { S } from './MusicItem.styled';

type Props = MusicItem & AudioItem;

type MusicItem = {
  item: Music;
};

type AudioItem = Pick<
  Audio,
  | 'handlePlayToggleClick'
  | 'handlePauseToggleClick'
  | 'currentMusic'
  | 'playing'
  | 'loading'
>;

const MusicItem = ({
  item,
  handlePlayToggleClick,
  handlePauseToggleClick,
  currentMusic,
  playing,
  loading,
}: Props) => {
  const { id, title, moods, genre, public_date } = item;

  const play = () => {
    handlePlayToggleClick?.(id, title);
  };

  const pause = () => {
    handlePauseToggleClick?.();
  };

  const CURRENT_MUSIC = id === currentMusic.id;
  const renderToggleButton = () => {
    if (!CURRENT_MUSIC) {
      return <PlayToggleButton playing={false} onClick={play} />;
    }

    if (CURRENT_MUSIC && playing) {
      return <PlayToggleButton playing={playing} onClick={pause} />;
    }

    if (CURRENT_MUSIC && !playing) {
      return (
        <PlayToggleButton playing={playing} onClick={play} loading={loading} />
      );
    }

    return <PlayToggleButton playing={false} onClick={play} />;
  };

  return (
    <S.MusicItem>
      <S.Row>
        {renderToggleButton()}
        <S.MusicItemTitle>{title}</S.MusicItemTitle>
      </S.Row>
      <S.Row>
        <S.MusicItemMood>{moods.map((mood) => '#' + mood)}</S.MusicItemMood>
        <S.MusicItemGenre>{genre}</S.MusicItemGenre>
        <S.MusicItemDate>{public_date}</S.MusicItemDate>
      </S.Row>
    </S.MusicItem>
  );
};

export default React.memo(MusicItem);
