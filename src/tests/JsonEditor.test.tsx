// JsonEditor.test.tsx
export {}; // This makes the file a module.

import { render, screen } from '@testing-library/react';
import JsonEditor from '../components/JsonEditor';

test('renders the JsonEditor component', () => {
  render(<JsonEditor onChange={() => {}} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
