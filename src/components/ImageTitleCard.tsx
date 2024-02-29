import Image from 'next/image';

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
    <div className="inline-block grow rounded-md border-2 border-gray-600 shadow-md">
      <div
        style={{
          position: 'relative',
          minHeight: '15vh',
          overflow: 'hidden',
        }}
        className="md:h-48"
      >
        <Image
          src={props.src}
          alt={altTextTemp}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            height: '100%',
          }}
          fill
        />
      </div>
      <h3
        className="text-center text-sm md:text-lg"
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
