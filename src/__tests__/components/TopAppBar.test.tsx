import React from 'react';
import { TopAppBar } from '../../components/topAppBar/TopAppBar';
import {
    cleanUpFakeTimer,
    render,
    screen,
    setupFakeTimer,
    userEvent,
    waitForElementToBeRemoved,
} from '../../shared/testUtils';
import { Text } from 'react-native';
import { IconName } from '../../components/icons/IconProps';
import TopAppBarMenuItem from '../../components/topAppBar/Menu/TopAppBarMenuItem';

const topBarTitle = 'Menu';

describe('TopAppBar mounting with a simple title', () => {
    it('displays a title', () => {
        const title = {
            value: topBarTitle,
        };

        render(<TopAppBar title={title} />);

        expect(screen.getByText(topBarTitle)).toBeOnTheScreen();
    });

    it.todo("testing menu title 'as string' on press");
});

describe('TopAppBar mounting with a title by passing a custom component', () => {
    it('displays a title', () => {
        const title = {
            value: <Text>{topBarTitle}</Text>,
        };

        render(<TopAppBar title={title} />);

        expect(screen.getByText(topBarTitle)).toBeOnTheScreen();
    });

    it.todo("testing menu title 'as component' on press");
});

describe('TopAppBar mounting with a go back button', () => {
    beforeEach(() => setupFakeTimer());
    afterEach(() => cleanUpFakeTimer());
    it('triggers `goBack` event when user press the go back button', async () => {
        const user = userEvent.setup();

        const mockOnGoBack = jest.fn();

        const title = {
            value: topBarTitle,
        };

        render(<TopAppBar title={title} onBack={mockOnGoBack} />);

        expect(mockOnGoBack).not.toHaveBeenCalled();

        await user.press(screen.getByLabelText(/back/i));

        expect(mockOnGoBack).toHaveBeenCalledTimes(1);
    });
});

describe('TopAppBar mounting with a menu', () => {
    const menuIconName = 'notifications-off' as const satisfies IconName;
    const menuTitle = 'Ne plus surveiller';
    const title = {
        value: topBarTitle,
    };
    let mockOnMenuItemPress: jest.Mock;

    beforeEach(() => {
        setupFakeTimer();
        mockOnMenuItemPress = jest.fn();

        render(
            <TopAppBar
                title={title}
                action={
                    <TopAppBar.Menu>
                        <TopAppBarMenuItem
                            iconName={menuIconName}
                            title={menuTitle}
                            onPress={mockOnMenuItemPress}
                        />
                    </TopAppBar.Menu>
                }
            />,
        );
    });
    afterEach(() => cleanUpFakeTimer());

    it('displays action menu button', () => {
        expect(screen.getByLabelText(/menu/i)).toBeOnTheScreen();
    });

    it('displays menu items when user press the action menu button', async () => {
        const user = userEvent.setup();

        expect(screen.queryByText(menuTitle)).not.toBeOnTheScreen();

        await user.press(screen.getByLabelText(/menu/i));

        expect(screen.getByText(menuTitle)).toBeOnTheScreen();
    });

    it('retrieves menu item data when user press a menu item', async () => {
        const user = userEvent.setup();

        await user.press(screen.getByLabelText(/menu/i));

        expect(mockOnMenuItemPress).not.toHaveBeenCalled();

        await user.press(screen.getByText(menuTitle));

        expect(mockOnMenuItemPress).toHaveBeenCalledTimes(1);
    });

    it('hides menu when user press a menu item', async () => {
        const user = userEvent.setup();

        await user.press(screen.getByLabelText(/menu/i));

        expect(screen.getByText(menuTitle)).toBeOnTheScreen();

        await user.press(screen.getByText(menuTitle));

        await waitForElementToBeRemoved(() => screen.queryByText(menuTitle));
    });
});
