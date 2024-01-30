import { useEffect } from 'react';
import { Keyboard, KeyboardEventListener, TextInput } from 'react-native';

export function useListenerOnKeyboardHiding(listener: KeyboardEventListener) {
    useEffect(() => {
        const hideSubscription = Keyboard.addListener(
            'keyboardDidHide',
            listener,
        );
        return () => {
            hideSubscription.remove();
        };
    }, [listener]);
}

export function hideKeyboard(ref: React.RefObject<TextInput>) {
    ref?.current?.blur();
}
