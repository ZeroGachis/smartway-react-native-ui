import React from 'react';
import { render, fireEvent, act } from '../../shared/testUtils';
import { TextField } from '../../components';

const mockedCallback = jest.fn();
const mockedTestID = 'mockedTestID';

describe('MODULE | TextField', () => {
    it('component renders correctly', () => {
        const tree = render(
            <TextField textType='information' value='' />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('component renders correctly with bottom text', () => {
        const tree = render(
            <TextField textType='information' value='' text='test' />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('component renders correctly when textType in error state', () => {
        const tree = render(<TextField textType='error' value='' />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('fires callback when on input value change', async () => {
        const tree = render(
            <TextField
                testID={mockedTestID}
                textType='information'
                value=''
                onChangeText={mockedCallback}
            />,
        );

        await act(async () => {
            fireEvent.changeText(tree.getByTestId(mockedTestID), '12345');
        });

        expect(mockedCallback).toHaveBeenCalledWith('12345');
    });
});
