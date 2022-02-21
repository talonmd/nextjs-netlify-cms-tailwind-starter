import Image from 'next/image';

interface ImageSectionProps {
  data: {
    type: 'image';
    source: string;
    alt?: string;
    caption?: string;
  };
}

const ImageSection: React.FC<ImageSectionProps> = ({ data: image }) => {
  return (
    <section>
      <figure className="relative w-96 h-96">
        <Image
          src={image.source}
          alt={image.alt || 'image alt'}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWA8AAccBIgbXS5wAAAAASUVORK5CYII="
        />
      </figure>
    </section>
  );
};

export default ImageSection;
