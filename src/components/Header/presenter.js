import React from 'react'
import styles from './styles.module.scss'
import {Link} from 'react-router-dom'
import IosPerson from 'react-ionicons/lib/IosPerson';
import IosNotificationsOutline from 'react-ionicons/lib/IosNotificationsOutline'
import {makeStyles} from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


const Header = (props, context) => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => () => {
        setState({...state, [side]: open});
    };

    return (
        <div className={styles.navigation}>
            <div className={styles.drawer}>
                <IconButton className={styles.menuButton}
                            onClick={toggleDrawer('left', true)}>
                    <MenuIcon color="inherit" fontSize={`large`}/>
                </IconButton>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleDrawer('left', false)}
                        onKeyDown={toggleDrawer('left', false)}>
                        <div className={classes.list}>
                            <List>
                                <Link to={`/salon`} className={styles.drawerText}>
                                    <ListItem button key={'Salon'}>
                                        <ListItemText primary={`Salon`} className={styles.drawerText}/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                                <Link to={`/Magazine`} className={styles.drawerText}>
                                    <ListItem button key={'Magazine'}>
                                        <ListItemText primary={`Magazine`}/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                                <Link to={`/Host`} className={styles.drawerText}>
                                    <ListItem button key={'Host'}>
                                        <ListItemText primary={`Host`}/>
                                    </ListItem>
                                </Link>
                            </List>
                        </div>
                    </div>
                </Drawer>
            </div>
            <div className={styles.inner}>
                <div className={styles.column}>
                    <Link to="/">
                        <img
                            src={require("images/logo.png")}
                            className={styles.logo}
                            alt={"Logo"}
                        />
                    </Link>
                </div>
                <div className={styles.column}>
                    <div>
                        <Link to={`/salon`} className={styles.menuText}>
                            Salon
                        </Link>
                    </div>
                    <div>
                        <Link to={`/magazine`} className={styles.menuText}>
                            Magazine
                        </Link>

                    </div>
                    <div>
                        <Link to={`/host`} className={styles.menuText}>
                            Host
                        </Link>
                    </div>
                    {swipeSignupColumn(props)}
                </div>
            </div>
        </div>
    );
}

const swipeSignupColumn = props => {
    if (props.isLoggedIn) {
        return (
            <div className={styles.navIconColumn}>
                <div className={styles.navIcon}>
                    <IosNotificationsOutline icon="ios-heart-outline" fontSize="28px" color="white"/>
                </div>
                <div className={styles.navIcon}>
                    <Link to="/profile">
                        <IosPerson icon="ios-compass-outline" fontSize="28px" color="white"/>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <span className={styles.loginButton}>
                <Link to={`/login`} className={styles.loginText}>
                    Log in / Join us
                </Link>
            </span>
        )
    }

}


export default Header