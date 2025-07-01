import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    privacyPage: {
        flex: 1,
        backgroundColor: '#18535f',
    },
    privacyContent: {
        padding: 20,
    },
    privacyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
    },
    privacyDate: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 16,
        textAlign: 'center',
    },
    privacyText: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
        lineHeight: 24,
        textAlign: 'justify',
    },
    privacyBullet: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 8,
        paddingLeft: 10,
    },
});


export { styles };