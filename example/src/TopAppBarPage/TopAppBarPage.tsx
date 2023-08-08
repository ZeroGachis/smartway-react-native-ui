import React, { useState } from 'react';
import { Alert, StyleSheet, Switch, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Body, Screen, TopAppBar } from 'smartway-react-native-ui';

export const TopAppBarPage = () => {
    const [title, setTitle] = useState<string>('Headline H1');
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [showSettings, setShowSettings] = useState<boolean>(false);

    const styles = StyleSheet.create({
        contentContainer: {
            marginTop: 50,
            borderColor: 'grey',
            borderWidth: 2,
            borderStyle: 'dashed',
        },
        options: {
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
        },
        option: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
        },
    });
    return (
        <Screen>
            <View style={styles.options}>
                <View style={styles.option}>
                    <Body>Title</Body>
                    <TextInput value={title} onChangeText={setTitle} />
                </View>
                <View style={styles.option}>
                    <Body>IsExpanded</Body>
                    <Switch value={isExpanded} onValueChange={() => setIsExpanded(!isExpanded)} />
                </View>
                <View style={styles.option}>
                    <Body>Show settings button</Body>
                    <Switch
                        value={showSettings}
                        onValueChange={() => setShowSettings(!showSettings)}
                    />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TopAppBar
                    isExpanded={isExpanded}
                    showSettings={showSettings}
                    settingsButton={{ onPress: () => Alert.alert('Settings click !') }}
                    backButton={{ onPress: () => Alert.alert('Back click !') }}
                    moreButton={{ onPress: () => Alert.alert('More click !') }}
                >
                    {title}
                </TopAppBar>
            </View>
        </Screen>
    );
};
