interface DefaultProps {
  value?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

interface PopupProps {
  title?: string;
  content?: string;
  children?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}
