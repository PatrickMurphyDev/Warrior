import Image from 'next/image';

import type { ILocationDetailPropsSlug } from '@/app/[locale]/(unauth)/location/[slug]/photos/page';
import { AppConfig } from '@/utils/AppConfig';

export default function LocationDetailPhotosPanel(
  props: ILocationDetailPropsSlug,
) {
  const data =
    AppConfig.locationDetailsArray[
      AppConfig.locationArray.indexOf(props.params.slug)
    ] || AppConfig.defaultLocationDetails;
  let photoIndexVar = 0;
  if (props.params.photoID) {
    photoIndexVar = props.params.photoID;
  }
  const imgUrl = `/assets/images/${data.imageList[photoIndexVar]}`;

  return (
    <div className="relative m-1 rounded border border-solid border-gray-300 p-1 shadow-md">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'inline-block',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 150,
          top: 0,
        }}
      >
        <Image
          src={imgUrl}
          alt="Photo of our store, Warrior's Quick Stop"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          fill
        />
      </div>
      <h4
        style={{ borderBottom: `2px solid ${AppConfig.colors[1]}` }}
        className="mb-1 pl-1"
      >
        {data?.imageList[photoIndexVar]}
      </h4>
    </div>
  );
}
