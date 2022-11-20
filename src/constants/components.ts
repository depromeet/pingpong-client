export const TagStyleType = {
  DARK: 'DARK',
  MEDIUM: 'MEDIUM',
  LIGHT: 'LIGHT',
} as const;

export const TagStyleClass = {
  DARK: 'text-white bg-gray-500',
  MEDIUM: 'text-gray-500 bg-gray-200',
  LIGHT: 'text-gray-500 bg-white border border-gray-200',
  DEFAULT: 'text-b4 px-10 py-4 rounded-full',
} as const;
