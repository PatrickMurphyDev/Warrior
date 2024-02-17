import Image from 'next/image';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

export type IImageTitleCardProps = {
  src: string;
  title?: string;
  altText?: string;
};
const ImageTitleCard = function ImageTitleCard(
  props: IImageTitleCardProps,
): React.ReactNode {
  const altTextTemp = props.altText || 'Image Alt Text Undefined';
  const titleTemp = props.title || 'Title Not Defined';
  return (
    <div
      style={{ marginRight: '6.25%' }}
      className="float-right w-1/4 rounded-md border-2 border-gray-600 shadow-md"
    >
      <div style={{ position: 'relative', minHeight: 200, overflow: 'hidden' }}>
        <Image
          src={props.src}
          alt={altTextTemp}
          style={{ objectFit: 'cover', objectPosition: 'center -50px' }}
          fill
        />
      </div>
      <h3
        className="text-center"
        style={{
          backgroundColor: `${AppConfig.colors[1]}`,
          color: `${AppConfig.colors[0]}`,
        }}
      >
        {titleTemp}
      </h3>
    </div>
  );
};

export { ImageTitleCard };
