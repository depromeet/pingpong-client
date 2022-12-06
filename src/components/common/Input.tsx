import Image from 'next/image';

type Props = DefaultProps & {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password' | 'date' | 'datetime';
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  maxLength?: number;
  showCount?: boolean;
};

const Input = ({ type = 'text', onChange, className, showCount, error, maxLength = 200, ...props }: Props) => {
  const handleClear = () => {
    onChange && onChange('');
  };

  return (
    <div className={`relative w-full flex flex-col text-b2 ${className}`}>
      <input
        type={type}
        className={`w-full pl-[12px] pr-[46px] py-[12.5px] border border-gray-200 focus:border-primary-dark focus:outline-none placeholder:text-gray-300 rounded-[8px] ${
          error && '!border-primary-error'
        }`}
        onChange={(e) => onChange && onChange(e.target.value)}
        maxLength={maxLength}
        {...props}
      />
      {props.value && (
        <button
          type="button"
          className="absolute right-0 w-[20px] h-[20px] m-[13px] rounded-full my-[13px] bg-[#CFCFCF] grid place-items-center"
          onClick={handleClear}
        >
          <span className="hidden">내용 삭제</span>
          <i className="relative">
            <Image src={'/icons/x-icon.svg'} alt="button" width={10} height={10} />
          </i>
        </button>
      )}
      <div
        className={`${error || showCount ? '' : 'hidden'} flex w-full mt-2 ${
          error ? 'justify-between' : 'justify-end'
        }`}
      >
        {error && <span className="text-primary-error ml-1 ">{error}</span>}
        {showCount && (
          <span className="text-gray-400 !justify-self-end">
            {props.value?.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
