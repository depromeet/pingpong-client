type Props = DefaultProps & {
  onChange?: (value: string) => void;
  placeholder?: string;
  maxLength: number;
  error?: string;
  className?: string;
};

const Textarea = ({ onChange, maxLength, error, className, ...props }: Props) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <textarea
        className={`w-full text-b2 pl-[12px] pr-[46px] py-[12.5px] border border-gray-200 resize-none focus:border-primary-dark focus:outline-none placeholder:text-gray-300 placeholder:text-b2 rounded-[8px] ${
          error && '!border-primary-error resize-none'
        }`}
        onChange={(e) => onChange && onChange(e.target.value)}
        cols={6}
        rows={6}
        maxLength={maxLength}
        {...props}
      ></textarea>
      <div className={`flex items-center w-full text-b4 mt-[8px] ${error ? 'justify-between' : 'justify-end'}`}>
        {error && <span className="text-primary-error">{error}</span>}
        <span className="text-gray-400 justify-self-end">
          {props.value?.length}/{maxLength}자
        </span>
      </div>
    </div>
  );
};

export default Textarea;
