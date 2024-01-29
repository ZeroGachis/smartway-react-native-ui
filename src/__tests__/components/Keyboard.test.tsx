import React from 'react';
import { render, fireEvent, act } from '../../shared/testUtils';
import { Keyboard } from '../../components';

const mockedCallback = jest.fn();

describe('MODULE | Keyboard', () => {
    it('component renders correctly', () => {
        const tree = render(
            <Keyboard
                focusedInput=''
                height={300}
                setValues={mockedCallback}
                onSubmit={mockedCallback}
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('return undefined if there is no focused input provided', async () => {
        const tree = render(
            <Keyboard
                focusedInput=''
                height={300}
                setValues={mockedCallback}
                onSubmit={mockedCallback}
            />,
        );
        const button = await tree.findByText('1');

        await act(async () => {
            return fireEvent.press(button);
        });
        expect(mockedCallback).not.toHaveBeenCalled();
    });
    it('sets the value on numeric button press', async () => {
        const currentState = { focusedInput: '' };
        const focusedInput = 'focusedInput';
        let nextState: any;
        const mockSetter = jest.fn().mockImplementation((callback) => {
            nextState = callback(currentState);
        });

        const tree = render(
            <Keyboard
                focusedInput={focusedInput}
                height={300}
                setValues={mockSetter}
                onSubmit={() => {
                    return;
                }}
            />,
        );

        const button = await tree.findByText('1');

        await act(async () => fireEvent.press(button));

        expect(mockSetter).toHaveBeenCalled();
        expect(nextState).toEqual({ focusedInput: '1' });
    });
    it('deletes the value on delete button press', async () => {
        const currentState = { focusedInput: '' };
        const mockedTestID = 'deleteButtonTestID';
        const focusedInput = 'focusedInput';
        let nextState: any;
        const mockedSetter = jest.fn().mockImplementation((callback) => {
            nextState = callback(currentState);
        });

        const tree = render(
            <Keyboard
                deleteButtonTestID={mockedTestID}
                focusedInput={focusedInput}
                height={300}
                setValues={mockedSetter}
                onSubmit={() => {
                    return;
                }}
            />,
        );
        const button = await tree.findByTestId(mockedTestID);

        await act(async () => fireEvent.press(button));

        expect(mockedSetter).toHaveBeenCalled();
        expect(nextState).toEqual({ focusedInput: '' });
    });
    it('fires callback onSubmit press', async () => {
        const mockedSetter = jest.fn();
        const mockedOnSubmit = jest.fn();
        const mockedTestID = 'submitButtonTestID';
        const focusedInput = 'input';
        const tree = render(
            <Keyboard
                submitButtonTestID={mockedTestID}
                focusedInput={focusedInput}
                height={300}
                setValues={mockedSetter}
                onSubmit={mockedOnSubmit}
            />,
        );
        const button = await tree.findByTestId(mockedTestID);

        await act(async () => fireEvent.press(button));

        expect(mockedOnSubmit).toHaveBeenCalled();
    });
});
