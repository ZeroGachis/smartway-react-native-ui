import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, IconButton, Screen, ThemeProvider, useTheme } from 'smartway-react-native-ui';

export const ButtonsPage = () => {
    const theme = useTheme();

    return (
        <ThemeProvider>
            <Screen style={styles.container}>
                <View>
                    <Button style={styles.button} mode="contained">
                        Filled
                    </Button>
                    <Button style={styles.button} mode="contained-tonal" status="primary">
                        Filled
                    </Button>
                    <Button style={styles.button} disabled mode="contained">
                        Filled
                    </Button>
                    <Button style={styles.button} scale="s" mode="contained">
                        Filled
                    </Button>
                    <Button style={styles.button} scale="s" mode="contained-tonal" status="primary">
                        Filled
                    </Button>
                    <Button style={styles.button} scale="s" disabled mode="contained">
                        Filled
                    </Button>
                </View>
                <View>
                    <Button style={styles.button} mode="text">
                        Text
                    </Button>
                    <Button style={styles.button} mode="text" status="primary">
                        Text
                    </Button>
                    <Button style={styles.button} disabled mode="text">
                        Text
                    </Button>
                    <Button style={styles.button} scale="s" mode="text">
                        Text
                    </Button>
                    <Button style={styles.button} scale="s" mode="text" status="primary">
                        Text
                    </Button>
                    <Button style={styles.button} scale="s" disabled mode="text">
                        Text
                    </Button>
                </View>
                <View>
                    <Button style={styles.outlinedButton} mode="outlined">
                        Outlined
                    </Button>
                    <Button style={styles.outlinedButton} mode="outlined" status="primary">
                        Outlined
                    </Button>
                    <Button style={styles.outlinedButton} disabled mode="outlined">
                        Outlined
                    </Button>
                    <Button style={styles.outlinedButton} scale="s" mode="outlined">
                        Outlined
                    </Button>
                    <Button style={styles.outlinedButton} scale="s" mode="outlined" status="primary">
                        Outlined
                    </Button>
                    <Button style={styles.outlinedButton} scale="s" disabled mode="outlined">
                        Outlined
                    </Button>
                </View>
                <View>
                    <IconButton icon="arrow-left" scale='m' mode="contained" />
                    <IconButton
                        icon="arrow-left"
                        style={styles.button} scale='m' mode="contained-tonal"
                        status='primary'
                    />
                    <IconButton icon="arrow-left"
                        style={styles.button} scale='m' disabled mode="contained" />
                </View>
                <View>
                    <IconButton
                        style={styles.button} icon="arrow-left" scale='m'  />
                    <IconButton
                        style={styles.button}
                        icon="arrow-left"
                        scale='m'
                        status='primary'
                    />
                    <IconButton
                        style={styles.button} icon="arrow-left" scale='m' disabled />
                </View>
                <View>
                    <IconButton
                        style={styles.button} icon="arrow-left" scale='m'  mode="outlined" />
                    <IconButton
                        style={styles.button}
                        icon="arrow-left"
                        scale='m' mode="outlined"
                        status='primary'
                    />
                    <IconButton
                        style={styles.button}
                        icon="arrow-left"
                        scale='m' mode="outlined"
                        disabled
                    />
                </View>
                <View>
                    <IconButton icon="arrow-left" style={smallStyles.button} scale='s' mode="contained"  />
                    <IconButton
                        icon="arrow-left"
                        style={smallStyles.button}
                        scale='s' mode="contained-tonal"
                        status='primary'
                    />
                    <IconButton
                        icon="arrow-left"
                        style={smallStyles.button}
                        scale='s' mode="contained"
                        disabled
                    />
                </View>
                <View>
                    <IconButton icon="arrow-left" style={smallStyles.button} scale='s' />
                    <IconButton
                        icon="arrow-left"
                        style={smallStyles.button}
                        scale='s'
                        status='primary'
                    />
                    <IconButton
                        icon="arrow-left"
                        style={smallStyles.button}
                        scale='s'
                        disabled
                    />
                </View>
                <View>
                    <IconButton
                        icon="arrow-left"
                        style={smallStyles.outlinedButton}
                        scale='s' mode="outlined"
                    />
                    <IconButton
                        icon="arrow-left"
                        style={smallStyles.outlinedButton}
                        scale='s' mode="outlined"
                        status='primary'

                    />
                    <IconButton
                        icon="arrow-left"
                        style={smallStyles.outlinedButton}
                        scale='s' mode="outlined"
                        disabled
                    />
                </View>
            </Screen>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        margin: 6,
    },
    smallButton: {
        margin: 6,
    },
    outlinedButton: {
        margin: 5,
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
