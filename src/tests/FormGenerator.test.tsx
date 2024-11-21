import React from 'react';
import { render, screen } from '@testing-library/react';
import FormGenerator from '../components/FormGenerator';

test('renders form with a valid JSON schema', () => {
  const schema = JSON.stringify({
    formTitle: 'Test Form',
    fields: [
      { id: 'name', type: 'text', label: 'Name', required: true }
    ]
  });

  render(<FormGenerator schema={schema} />);
  expect(screen.getByText('Test Form')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
});
