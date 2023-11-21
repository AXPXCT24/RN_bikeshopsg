import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    marginTop: 40,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tucard: {
      backgroundColor: '#bbd9e1',
      padding: 32,
      width: 350, 
      borderRadius: 6,
    },
    tucardHeader: {},
    tucardTitle: {
      letterSpacing: 2,
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'white',
      fontSize: 20, 
    },
    tucardText: {
      margin: 0,
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: '300',
      textAlign: 'center',
      color: 'white',
    },
    tucardBody: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#fff',
    },
    stampUsed: {
      width: 64,
      height: 64,
      borderRadius: 64,
      borderWidth: 1,
      borderColor: '#405da1',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 6,
    },
    stampText: {
      fontSize: 32, 
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#405da1',
    },
    tucardFooter: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 2,
      fontSize: 12,
    },
  });
  

export default styles;