import React from 'react';
import {
    cleanUpFakeTimer,
    render,
    screen,
    setupFakeTimer,
    userEvent,
} from '../../shared/testUtils';
import Snackbar, { useSnackbar } from '../../components/alert/Snackbar';

describe('Uncontrolled Snackbar', () => {
    let mockOnDismiss: jest.Mock;

    beforeEach(() => {
        mockOnDismiss = jest.fn();
        render(
            <Snackbar
                visible
                status='information'
                onDismiss={mockOnDismiss}
                title='This is a title'
                description='This is a decription'
            />,
        );
    });
    it('mounts Snackbar correctly', () => {
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

describe('Uncontrolled Snackbar invisibled on mount', () => {
    let mockOnDismiss: jest.Mock;

    beforeEach(() => {
        mockOnDismiss = jest.fn();
        render(
            <Snackbar
                visible={false}
                status='information'
                onDismiss={mockOnDismiss}
                title='This is a title'
                description='This is a decription'
            />,
        );
    });

    it('does not show the Snackbar', () => {
        expect(screen.queryByText(/this is a title/i)).not.toBeOnTheScreen();
        expect(
            screen.queryByText(/this is a decription/i),
        ).not.toBeOnTheScreen();
    });
});

describe('Controlled Snackbar visible on mount', () => {
    const ControlledBanner = () => {
        const { dismiss, visible } = useSnackbar(true);

        return (
            <Snackbar
                visible={visible}
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
