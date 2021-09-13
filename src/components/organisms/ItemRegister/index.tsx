import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { collection, doc, setDoc } from '@firebase/firestore';
import { db, firebaseTimestamp } from '@/lib/firebase';
import RegisterButton from '@/components/atoms/RegisterButton';
import SelectMenu from '@/components/atoms/SelectMenu';
import Spacer from '@/components/atoms/Spacer';
import TextField from '@/components/atoms/TextField';
import { categories } from '@/data/category';

type ContainerProps = {
  name?: string;
  description?: string;
  category?: string;
  capacity?: number;
  number?: number;
  price?: number;
  setCategory?: any; // FIXME: 後で修正
  inputName?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  inputDescription?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  inputCapacity?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  inputNumber?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  inputPrice?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onItemRegister?: () => void;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const {
    className,
    name,
    description,
    category,
    capacity,
    number,
    price,
    setCategory,
    inputName,
    inputDescription,
    inputCapacity,
    inputNumber,
    inputPrice,
    onItemRegister,
  } = props;

  return (
    <section>
      <div className={className}>
        <h2>商品の登録</h2>
        <TextField
          label="商品名"
          type="text"
          value={name}
          onChange={inputName}
        />
        <TextField
          label="商品の説明"
          type="text"
          multiline={true}
          rows={7}
          value={description}
          onChange={inputDescription}
        />
        <SelectMenu
          label="カテゴリー"
          value={category}
          set={setCategory}
          options={categories}
        />
        <TextField
          label="容量"
          type="number"
          inputProps={{ min: 0 }}
          value={capacity}
          onChange={inputCapacity}
        />
        <TextField
          label="個数"
          type="number"
          inputProps={{ min: 0 }}
          value={number}
          onChange={inputNumber}
        />
        <TextField
          label="価格"
          type="number"
          inputProps={{ min: 0 }}
          value={price}
          onChange={inputPrice}
        />
        <Spacer height={16} />
        <div className={'center'}>
          <RegisterButton label="登録" onClick={onItemRegister} />
        </div>
      </div>
    </section>
  );
};

const StyledComponent = styled(Component)`
  max-width: 100vw;
  width: 560px;
  height: auto;
  margin: 0 auto;
  padding: 5rem;

  & .center {
    margin: 0 auto;
    text-align: center;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }
`;

const Container: React.VFC<ContainerProps> = () => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [capacity, setCapacity] = useState<number>();
  const [number, setNumber] = useState<number>();
  const [price, setPrice] = useState<number>();

  const inputName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputDescription = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputCapacity = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCapacity(Number(event.target.value));
    },
    [setCapacity]
  );

  const inputNumber = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNumber(Number(event.target.value));
    },
    [setNumber]
  );

  const inputPrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(Number(event.target.value));
    },
    [setPrice]
  );

  const router = useRouter();

  const onItemRegister = async () => {
    // TODO: ちゃんとしたバリデーションを後で実装する
    if (
      name === '' ||
      description === '' ||
      category === '' ||
      capacity === undefined ||
      number === undefined ||
      price === undefined
    ) {
      alert('必須項目が未入力です。');
      return false;
    }

    try {
      const itemRef = collection(db, 'item');
      const uid = doc(itemRef).id;
      const timestamp = firebaseTimestamp;

      setDoc(doc(itemRef, uid), {
        created_at: timestamp,
        uid: uid,
        name: name,
        description: description,
        category: category,
        capacity: capacity,
        number: number,
        price: price,
      });

      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        alert('商品の登録に失敗しました。もう一度お試しください。');
        console.error(error.message);
      }
    }
  };

  const containerProps = {
    name,
    description,
    category,
    capacity,
    number,
    price,
    setCategory,
    inputName,
    inputDescription,
    inputCapacity,
    inputNumber,
    inputPrice,
    onItemRegister,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
