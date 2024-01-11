import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';

function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { Button, multiply, Card };
