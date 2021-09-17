import React, { useCallback } from 'react';
import styled from 'styled-components';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate';
import { storageV8 } from '@/lib/firebase';
import ImagePreview from '@/components/atoms/ImagePreview';
import IconButton from '@/components/molecules/IconButton';
import { imageProps } from '@/models/types';

type ContainerProps = {
  images: imageProps[];
  setImages: React.Dispatch<React.SetStateAction<imageProps[]>>;
  onUploadImage?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  onDeleteImage?: (id: imageProps['id']) => Promise<false | void>;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, images, onUploadImage, onDeleteImage } = props;

  return (
    <>
      <div className={className}>
        {images.length > 0 &&
          images.map((image) => (
            <ImagePreview
              key={image.id}
              id={image.id}
              path={image.path}
              onDelete={
                onDeleteImage as (id: imageProps['id']) => Promise<false | void>
              }
            />
          ))}
      </div>
      <span>商品を登録する</span>
      <IconButton>
        <AddPhotoAlternate />
        <input
          className="input"
          id="image"
          type="file"
          accept="image/*"
          multiple
          onChange={onUploadImage}
        />
      </IconButton>
    </>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-flow: row wrap;
  margin: 1.5rem;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  const { images, setImages } = props;

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
      // 読み込んだ画像ファイルをバイナリデータに変換
      const imageFile = event.target.files;
      if (!imageFile) return;

      const blobImage = new Blob(imageFile as unknown as BlobPart[], {
        type: 'image/jpeg',
      });

      // 画像に 16桁の ID を付与
      const id = generateId();

      // 画像を Cloud Storage にアップロード
      const imageRef = storageV8.ref('image').child(id);
      const imagePut = await imageRef.put(blobImage);

      try {
        // アップロードが完了したら、画像の URL を取得
        const imageURL = await imagePut.ref.getDownloadURL();

        setImages((prevState) => [
          ...prevState,
          {
            id,
            path: imageURL,
          },
        ]);
      } catch (error) {
        if (error instanceof Error) {
          alert('画像のアップロードに失敗しました。もう一度お試しください。');
          console.error(error.message);
        }
      }
    },
    [setImages]
  );

  const onDeleteImage = useCallback(
    async (id: imageProps['id']) => {
      const ret = window.confirm('この画像を削除しますか？');
      if (!ret) return false; // いいえ がクリックされた時

      // クリックした画像は残し、それ以外は Cloud Storage から削除
      const newImageFile = images.filter((image) => image.id !== id);
      setImages(newImageFile);
      return storageV8.ref('image').child(id).delete();
    },
    [images, setImages]
  );

  const containerProps = {
    images,
    onUploadImage,
    onDeleteImage,
  };

  return <StyledComponent {...props} {...containerProps} />;
};

export default Container;
