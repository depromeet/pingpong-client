import { useSetRecoilState } from 'recoil';

import { popupAtom } from '@/store/components';
import type { PopupProps } from '@/typings/common';

import Portal from './Portal';

const Popup = ({ children, content, title, cancelText, confirmText, onCancel, onConfirm }: PopupProps) => {
  const setPopup = useSetRecoilState<PopupProps | null>(popupAtom);

  const onCancelClicked = () => {
    onCancel && onCancel();

    setPopup(null);
  };

  const onConfirmClicked = () => {
    console.log('onConfirmClicked');
    onConfirm && onConfirm();

    setPopup(null);
  };

  return (
    <Portal isShowing className="fixed w-screen h-screen left-0 top-0 grid place-items-center px-[6%] z-[100]">
      <div className="rounded-[16px] w-full bg-white z-50">
        <main className="px-5 py-[8%] flex items-center gap-2 flex-col">
          <h1 className="text-t2 text-center text-gray-600">{title}</h1>
          {content && <p className="text-gray-400 text-center text-b2" dangerouslySetInnerHTML={{ __html: content }} />}
          {children}
        </main>
        <footer className="flex w-full text-[15px] items-center justify-center border-t-[1px] border-gray-150">
          {cancelText && (
            <button
              className="text-button w-full py-[4%] border-r-[1px] border-gray-150 text-gray-400"
              onClick={onCancelClicked}
            >
              {cancelText ?? '취소'}
            </button>
          )}
          <button className="text-primary-dark w-full py-[4%] text-button" onClick={onConfirmClicked}>
            {confirmText ?? '확인'}
          </button>
        </footer>
      </div>
      <div className="fixed w-screen h-screen left-0 top-0 bg-black opacity-50 z-40" />
    </Portal>
  );
};

export default Popup;
