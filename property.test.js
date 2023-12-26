// propertyTest.js
import { describe, it, expect, vi } from 'vitest';
import { getProperties } from './src/api.js';

// Mock the api module
vi.mock('api', () => ({
  default: () => ({
    auth: vi.fn(),
    getProperties: vi.fn(() => Promise.resolve({
      data: {
        content: [
          { title: 'Property 1' },
          { title: 'Property 2' },
          // ... more properties
        ]
      }
    }))
  })
}));

describe('getProperties', () => {
  it('should log the title of each property', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    await getProperties();

    expect(consoleSpy).toHaveBeenCalledWith('Property 1');
    expect(consoleSpy).toHaveBeenCalledWith('Property 2');
    // ... more assertions
  });
});

