import { useSetRecoilState } from 'recoil';

import { popupAtom } from '@/store/components';

import Portal from './Portal';

const Popup = ({ children, content, title, cancelText, confirmText, onCancel, onConfirm }: PopupProps) => {
  const setPopup = useSetRecoilState<PopupProps | null>(popupAtom);

  const onCancelClicked = () => {
    onCancel && onCancel();

    setPopup(null);
    window.history.back();
  };

  const onConfirmClicked = () => {
    onConfirm && onConfirm();

    setPopup(null);
    window.history.back();
  };

  return (
    <Portal isShowing className="absolute w-screen h-screen left-0 top-0 grid place-items-center px-[6%]">
      <div className="rounded-[16px] w-full bg-white z-10">
        <main className="px-5 py-[8%] flex items-center gap-2 flex-col">
          <h1 className="text-[16px] text-center text-gray-900 font-semibold">{title}</h1>
          {content && (
            <p className="text-gray-500 text-center text-[15px]" dangerouslySetInnerHTML={{ __html: content }} />
          )}
          {children}
        </main>
        <footer className="flex w-full text-[15px] items-center justify-center border-t-[1px] border-gray-150">
          {onCancel && (
            <button className=" w-full py-[4%] border-r-[1px] border-gray-150 text-gray-550" onClick={onCancelClicked}>
              {cancelText ?? '취소'}
            </button>
          )}
          <button className="text-blue-300 w-full py-[4%] font-medium" onClick={onConfirmClicked}>
            {confirmText ?? '확인'}
          </button>
        </footer>
      </div>
      <div className="fixed w-screen h-screen left-0 top-0 bg-black opacity-50" />
    </Portal>
  );
};

export default Popup;
