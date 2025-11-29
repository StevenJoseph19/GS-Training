
export const loadingStatus = {
  idle: 'idle',
  isLoading: 'isLoading',
  loaded: 'loaded',
  hasErrored: 'hasErrored',
} as const;
export type LoadingStatus = typeof loadingStatus[keyof typeof loadingStatus];
