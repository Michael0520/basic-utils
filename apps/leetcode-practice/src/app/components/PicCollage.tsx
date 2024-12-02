'use client';

import { useState, MouseEvent } from 'react';

interface EmojiProps {
  x: number;
  y: number;
  onRemove: (e: MouseEvent<HTMLSpanElement>) => void;
}

interface Emoji {
  id: number;
  x: number;
  y: number;
}

function Emoji({ x, y, onRemove }: EmojiProps) {
  const EMOJI_SIZE = 24;

  return (
    <span
      className="emoji-item"
      style={{
        left: x - EMOJI_SIZE / 2,
        top: y - EMOJI_SIZE / 2,
      }}
      onClick={onRemove}
    >
      🍌
    </span>
  );
}

export const PicCollage = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const CLICK_AREA = 24;

  const addEmoji = (x: number, y: number) => {
    setEmojis((prev) => [...prev, { id: Date.now(), x, y }]);
  };

  const removeEmoji = (id: number) => {
    setEmojis((prev) => prev.filter((emoji) => emoji.id !== id));
  };

  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = e;

    // 檢查是否點擊到現有的 emoji
    const clickedEmoji = emojis.find(
      (emoji) =>
        Math.abs(x - emoji.x) < CLICK_AREA / 2 &&
        Math.abs(y - emoji.y) < CLICK_AREA / 2
    );

    // 只有在沒有點擊到 emoji 時才新增
    if (!clickedEmoji) {
      addEmoji(x, y);
    }
  };

  return (
    <div className="emoji-container" onClick={handleBackgroundClick}>
      <h2>Emojis Count: {emojis.length}</h2>
      {emojis.map(({ id, x, y }) => (
        <Emoji
          key={id}
          x={x}
          y={y}
          onRemove={(e) => {
            e.stopPropagation();
            removeEmoji(id);
          }}
        />
      ))}
    </div>
  );
};
