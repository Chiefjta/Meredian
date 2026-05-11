import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusDot } from './StatusDot';

describe('<StatusDot/>', () => {
  it('announces its status to screen readers', () => {
    render(<StatusDot status="working" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Status: working');
  });
});
