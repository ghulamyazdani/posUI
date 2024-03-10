import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { ShimmerLoader } from './components/Loaders/SkeletonLoading/ShimmerLoader';
import { PosUIThemeProvider } from './core/PosUIProvier';
import { PageConatainers } from './components/Containers/PageConatainers';
function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export {
  Button,
  multiply,
  Card,
  ShimmerLoader,
  PosUIThemeProvider,
  PageConatainers,
};

export * from './core';
export * from './icons';

// export * from './Icon';
