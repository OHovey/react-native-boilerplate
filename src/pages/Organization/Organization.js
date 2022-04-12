import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const Organization = ({ navigation }) => {

    return (
        <View style={styles.root}>

        </View>
    )
}

Organization.propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func })
}

Organization.defaultProps = {
    navigation: { navigate: () => null }
}

export default Organization;