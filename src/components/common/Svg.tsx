import type { PropsWithChildren } from 'react';

/*
* size를 통해 한 번에 width, heigth을 설정할 수 있습니다.

* width, height 설정시 size보다 우선적으로 설정됩니다.

* number 하나로 0 0 20 20 와 같은 viewBox를 가져갈 수 있습니다.
* array 사용시 새로운 viewBox를 생성할 수 있습니다.

* isUsingFill 옵션을 통해 fill 사용 여부를 결정할 수 있습니다. ( default는 true 입니다 )
* 내부적으로 fill 사용시 외부 color css가 적용되지 않습니다.

* className을 통해 tailwindCSS를 이용할 수 있습니다.
*/

interface InternalSvgProps {
  size: number;
  width: number;
  height: number;
  viewBox: [number, number, number, number] | number;
  color: string;
  isUsingFill: boolean;
  className: string;
}

const Svg = ({
  size,
  width,
  height,
  viewBox,
  color,
  children,
  isUsingFill = true,
  className,
}: PropsWithChildren<Partial<InternalSvgProps>>) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size ?? 20}
      height={height ?? size ?? 20}
      viewBox={viewBox ? (typeof viewBox === 'number' ? `0 0 ${viewBox} ${viewBox}` : viewBox.join(' ')) : '0 0 20 20'}
      fill={isUsingFill ? color ?? 'currentColor' : undefined}
    >
      {children}
    </svg>
  );
};

export default Svg;
