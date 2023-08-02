import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, IconButton, Screen, ThemeProvider, useTheme } from 'smartway-react-native-ui';

export const ButtonsPage = () => {
    const theme = useTheme();

    return (
        <ThemeProvider>
            <Screen>
                <View style={[
                    styles.container,
                    {
                    flexDirection: 'column',
                    },
                ]}>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}} >
                        <View >
                            <Button style={styles.button} variant="filled">
                                Filled
                            </Button>
                            <Button style={styles.button} variant="filled" status="primary">
                                Filled
                            </Button>
                            <Button style={styles.button} disabled variant="filled">
                                Filled
                            </Button>
                        </View>
                        <View>
                            <Button style={styles.button} size="s" variant="filled">
                                Filled
                            </Button>
                            <Button style={styles.button} size="s" variant="filled" status="primary">
                                Filled
                            </Button>
                            <Button style={styles.button} size="s" disabled variant="filled">
                                Filled
                            </Button>
                        </View>
                        <View >
                            <Button style={styles.button} variant="text">
                                Text
                            </Button>
                            <Button style={styles.button} variant="text" status="primary">
                                Text
                            </Button>
                            <Button style={styles.button} disabled variant="text">
                                Text
                            </Button>
                        </View>
                        <View>
                            <Button style={styles.button} size="s" variant="text">
                                Text
                            </Button>
                            <Button style={styles.button} size="s" variant="text" status="primary">
                                Text
                            </Button>
                            <Button style={styles.button} size="s" disabled variant="text">
                                Text
                            </Button>
                        </View>
                        <View>
                            <Button style={styles.outlinedButton} variant="outlined">
                                Outlined
                            </Button>
                            <Button style={styles.outlinedButton} variant="outlined" status="primary">
                                Outlined
                            </Button>
                            <Button style={styles.outlinedButton} disabled variant="outlined">
                                Outlined
                            </Button>
                        </View>
                        <View>
                            <Button style={styles.outlinedButton} size="s" variant="outlined">
                                Outlined
                            </Button>
                            <Button
                                style={styles.outlinedButton}
                                size="s"
                                variant="outlined"
                                status="primary"
                            >
                                Outlined
                            </Button>
                            <Button style={styles.outlinedButton} size="s" disabled variant="outlined">
                                Outlined
                            </Button>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View>
                            <IconButton icon="arrow-left" size="m" variant="filled" />
                            <IconButton
                                icon="arrow-left"
                                style={styles.button}
                                size="m"
                                variant="filled"
                                status="primary"
                            />
                            <IconButton
                                icon="arrow-left"
                                style={styles.button}
                                size="m"
                                disabled
                                variant="filled"
                            />
                        </View>
                        <View>
                            <IconButton style={styles.button} icon="arrow-left" size="m" variant="icon" />
                            <IconButton
                                style={styles.button}
                                icon="arrow-left"
                                size="m"
                                status="primary"
                                variant="icon"
                            />
                            <IconButton
                                style={styles.button}
                                icon="arrow-left"
                                size="m"
                                disabled
                                variant="icon"
                            />
                        </View>
                        <View>
                            <IconButton
                                style={styles.button}
                                icon="arrow-left"
                                size="m"
                                variant="outlined"
                            />
                            <IconButton
                                style={styles.button}
                                icon="arrow-left"
                                size="m"
                                variant="outlined"
                                status="primary"
                            />
                            <IconButton
                                style={styles.button}
                                icon="arrow-left"
                                size="m"
                                variant="outlined"
                                disabled
                            />
                        </View>
                        <View>
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.button}
                                size="s"
                                variant="filled"
                            />
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.button}
                                size="s"
                                variant="filled"
                                status="primary"
                            />
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.button}
                                size="s"
                                variant="filled"
                                disabled
                            />
                        </View>
                        <View>
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.button}
                                size="s"
                                variant="icon"
                            />
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.button}
                                size="s"
                                status="primary"
                                variant="icon"
                            />
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.button}
                                size="s"
                                disabled
                                variant="icon"
                            />
                        </View>
                        <View>
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.outlinedButton}
                                size="s"
                                variant="outlined"
                            />
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.outlinedButton}
                                size="s"
                                variant="outlined"
                                status="primary"
                            />
                            <IconButton
                                icon="arrow-left"
                                style={smallStyles.outlinedButton}
                                size="s"
                                variant="outlined"
                                disabled
                            />
                        </View>
                    </View>
                </View>
            </Screen>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        margin: 6,
    },
    smallButton: {
        margin: 6,
    },
    outlinedButton: {
        margin: 6,
    },
});

const smallStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        margin: 6,
    },
    outlinedButton: {
        margin: 5,
    },
});
