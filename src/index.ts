import { Button } from './components/Button/Button';

function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { Button, multiply };
