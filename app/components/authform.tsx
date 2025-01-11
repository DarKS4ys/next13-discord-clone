'use client';

import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from './Inputs/Input';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant, setVariant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
 
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {

  }

  if (variant === 'LOGIN') {

  }
}

  const socialAction= (action: string) => {
    setIsLoading(true);

  }

    return (
    <div className='flex justify-center items-center mt-4'>
        <div className='bg-white px-4 py-8 shadow-lg rounded-lg w-5/6 sm:max-w-md'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <Input label='Email' register={register} id={String(31)} />
        </form>
        </div>
    </div>
    );
};

export default AuthForm;
