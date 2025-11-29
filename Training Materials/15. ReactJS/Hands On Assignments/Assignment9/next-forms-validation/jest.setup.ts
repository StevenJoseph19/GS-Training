
import '@testing-library/jest-dom';

// Mock next/image to a plain <img> for jsdom
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    return require('react').createElement('img', { src: typeof src === 'string' ? src : '', alt, ...rest });
  },
}));
