import {render, screen} from '@testing-library/react';
import Async from './Async';
describe('async component', () => {
    test('renders post if request succeeds', async () => {
        // Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}],
        });
        render(<Async />);

        const listItemeElements = await screen.findAllByRole('listitem');
        expect(listItemeElements).not.toHaveLength(0);
    });
});