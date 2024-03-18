import React from 'react';
import {
    cleanUpFakeTimer,
    render,
    screen,
    setupFakeTimer,
    userEvent,
} from '../../shared/testUtils';
import Banner, { useBanner } from '../../../src/components/alert/Banner';

describe('Uncontrolled Banner', () => {
    let mockOnDismiss: jest.Mock;

    beforeEach(() => {
        mockOnDismiss = jest.fn();
        render(
            <Banner
                status='information'
                onDismiss={mockOnDismiss}
                title='This is a title'
                description='This is a decription'
            />,
        );
    });
    it('mounts banner correctly', () => {
        expect(screen.getByText(/this is a title/i)).toBeOnTheScreen();
        expect(screen.getByText(/this is a decription/i)).toBeOnTheScreen();
    });

    it('triggers `onDismiss` event when user press dismiss icon', async () => {
        setupFakeTimer();

        const user = userEvent.setup();

        expect(mockOnDismiss).not.toHaveBeenCalled();

        await user.press(screen.getByLabelText(/dismiss/i));

        expect(mockOnDismiss).toHaveBeenCalledTimes(1);

        cleanUpFakeTimer();
    });
});

describe('Controlled Banner', () => {
    const ControlledBanner = () => {
        const { dismiss, visible } = useBanner(true);

        if (!visible) {
            return null;
        }

        return (
            <Banner
                status='information'
                onDismiss={dismiss}
                title='This is a title'
                description='This is a decription'
            />
        );
    };

    it('triggers `onDismiss` event when user press dismiss icon', async () => {
        setupFakeTimer();

        render(<ControlledBanner />);
        const user = userEvent.setup();

        expect(screen.getByText(/this is a title/i)).toBeOnTheScreen();
        expect(screen.getByText(/this is a decription/i)).toBeOnTheScreen();

        await user.press(screen.getByLabelText(/dismiss/i));

        expect(screen.queryByText(/this is a title/i)).not.toBeOnTheScreen();
        expect(
            screen.queryByText(/this is a decription/i),
        ).not.toBeOnTheScreen();

        cleanUpFakeTimer();
    });
});
