
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    return require('react').createElement('img', { src: typeof src === 'string' ? src : '', alt, ...rest });
  },
}));
