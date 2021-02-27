import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    font: 'Merriweather',
    color: '#ff0000',
  },
  image: {
    marginLeft: '15px',
  },
}));