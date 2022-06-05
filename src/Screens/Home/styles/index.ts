import { StyleSheet, StatusBar } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaTitle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.title,
  },
  subTitle: {
    paddingLeft: 16,
  },
  lista: {
    flex: 1,
    width: '100%',
  },
  lastSeen: {
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: theme.lastSeen,
  },
  lastSeenTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.title,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  areaCart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cartIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.title,
  },
  areaCartQuantity: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartQuantity: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  areaIcon: {
    marginLeft: 16,
  },
  icon: {
    color: theme.text,
    fontSize: 30,
  },
})
