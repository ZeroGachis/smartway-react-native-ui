import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { useTheme } from '../../../styles/themes';
import TopAppBarAction from '../TopAppBarAction';

type TopAppBarMenuContextValue =
    | { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }
    | undefined;

const TopAppBarMenuContext =
    React.createContext<TopAppBarMenuContextValue>(undefined);

type TopAppBarMenuProps = {
    children: ReactNode;
};

const TopAppBarMenu = ({ children }: TopAppBarMenuProps) => {
    const styles = useStyles();

    const [isOpen, setIsOpen] = React.useState(false);

    const value = { isOpen, setIsOpen };

    return (
        <>
            <Portal>
                <Modal
                    visible={isOpen}
                    onDismiss={() => setIsOpen(false)}
                    style={styles.modal}
                    contentContainerStyle={styles.modalContent}
                >
                    <TopAppBarMenuContext.Provider value={value}>
                        <View style={styles.menu}>{children}</View>
                    </TopAppBarMenuContext.Provider>
                </Modal>
            </Portal>
            <TopAppBarAction
                accessibilityLabel='Menu'
                icon='dots-vertical'
                onPress={() => setIsOpen(true)}
            />
        </>
    );
};

function useTopAppBarMenu() {
    const context = React.useContext(TopAppBarMenuContext);
    if (context === undefined) {
        throw new Error('useTopAppBarMenu must be used within a TopAppBarMenu');
    }
    return context;
}

function useStyles() {
    const theme = useTheme();
    return StyleSheet.create({
        modal: {
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
        },
        modalContent: {
            marginTop: 84,
            marginRight: theme.sw.spacing.xs,
        },
        menu: {
            backgroundColor: theme.sw.colors.neutral['50'],
            borderRadius: 18,
            width: 248,
        },
    });
}

export { TopAppBarMenu, useTopAppBarMenu };
