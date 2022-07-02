import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/oleo-script-swash-caps"


export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

      },
      heading: {
        color: 'rgba(0,183,255, 1)',
        fontFamily: "Oleo Script Swash Caps"
      },
      image: {
        marginLeft: '15px',
      },
}))