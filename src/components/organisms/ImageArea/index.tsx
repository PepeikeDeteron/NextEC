import React, { useCallback } from 'react';
import styled from 'styled-components';
import { AddPhotoAlternate } from '@material-ui/icons';
import IconButton from '@/components/molecules/IconButton';
import { imageProps } from '@/models/types';
import { storage } from '@/lib/firebase';
import ImagePreview from '@/components/atoms/ImagePreview';

type ContainerProps = {
  images: imageProps[];
  setImages: React.Dispatch<React.SetStateAction<imageProps[]>>;
  onUploadImage: any;
  onDeleteImage: any;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, images, onUploadImage, onDeleteImage } = props;

  return (
    <div>
      <div className={className}>
        {images?.length > 0 &&
          images?.map((image) => (
            <ImagePreview
              key={image.id}
              image={image}
              onDelete={onDeleteImage}
            />
          ))}
      </div>
      <div className="title">
        <span>商品を登録する</span>
        <IconButton>
          <label>
            <AddPhotoAlternate />
            <input
              className="input"
              type="file"
              id="image"
              onChange={(event) => onUploadImage(event)}
            />
          </label>
        </IconButton>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  // .image-area {
  //   display: flex;
  //   flex-flow: wrap;
  // }

  // .image-area > .image {
  //   margin: 5rem;
  //   width: calc(50% - 1rem);
  // }

  display: flex;
  flex-flow: wrap;

  .image {
    margin: 5rem;
    widt50% - 1rem);
  }

  .title {
    text-align: center;
  }
`;

const Container: React.VFC<ContainerProps> = (props) => {
  const { images, setImages } = props;

  // 画像に付与する 16桁の ID
  const generateId = (): string => {
    const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from(crypto.getRandomValues(new Uint8Array(16)))
      .map((n) => {
        return S[n % S.length];
      })
      .join('');
  };

  const onUploadImage = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      // 読み込んだ画像ファイルをバイナリデータに変換する
      const imageFile = event.target.files;
      const blobImage = new Blob(imageFile as unknown as BlobPart[], {
        type: 'image/jpeg',
      });
      const id = generateId();

      const imageRef = storage.ref('image').child(id);
      const imagePut = imageRef.put(blobImage);

      try {
        const imageURL = await imagePut.snapshot.ref.getDownloadURL();

        // 複数枚画像登録できる
        setImages((prevState) => [
          ...prevState,
          {
            id,
            path: imageURL,
          },
        ]);
      } catch (error) {
        return console.error(error);
      }
    },
    [setImages]
  );

  const onDeleteImage = useCallback(
    async (id: imageProps['id']) => {
      const ret = window.confirm('この画像を削除しますか？');
      if (!ret) return false;

      const newImageFile = images.filter((image) => image.id !== id);
      setImages(newImageFile);
      return storage.ref('image').child(id).delete();
    },
    [images, setImages]
  );

  const containerProps = {
    images,
    setImages,
    onUploadImage,
    onDeleteImage,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
