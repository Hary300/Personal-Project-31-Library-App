import { cn } from '@/lib/utils';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errorMessage?: string;
  type?: 'text' | 'password';
  onClick?: () => void;
  isPassShown?: boolean;
}

const InputField = <T extends FieldValues>({
  register,
  name,
  errorMessage,
  type = 'text',
  onClick,
  isPassShown,
}: InputFieldProps<T>) => {
  const label = name.slice(0, 1).toUpperCase() + name.slice(1);
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={name} className='font-bold text-sm'>
        {label}
      </label>
      <div className='relative'>
        <input
          type={type}
          id={name}
          {...register(name)}
          className={cn(
            'py-2 px-4 border rounded-xl focus:outline-none w-full',
            errorMessage && 'border-red'
          )}
        />
        {type === 'password' && (
          <div
            onClick={onClick}
            className='absolute right-4 cursor-pointer top-1/2 -translate-y-1/2'
          >
            {isPassShown ? (
              <IoEyeOutline className='size-5' />
            ) : (
              <FaRegEyeSlash className='size-5' />
            )}
          </div>
        )}
      </div>
      {errorMessage && <p className='text-red text-sm'>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
