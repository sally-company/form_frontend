import React, {Component} from 'react'
// import styles from './styles.module.scss'
import {Text, Card, Button, Box, Link} from 'gestalt';
import Image from 'react-image-resizer'
import 'gestalt/dist/gestalt.css';

class Poster extends Component {

    constructor(props) {
        super(props);
        this.state = {hovered: false};
        this.handleMouseEnter = this._handleMouseEnter.bind(this);
        this.handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
        this.setState(() => ({hovered: true}));
    }

    _handleMouseLeave() {
        this.setState(() => ({hovered: false}));
    }

    render() {
        return (
            <Box maxWidth={236} padding={2} column={12}>
                <Card
                    image={
                        <Image
                            alt="square"
                            height={200}
                            width={200}
                            src={require('images/phone_fram.png')}
                        >
                            <Box padding={3}>
                                <Text color="red">
                                    Tropic greens: The taste of Petrol and Porcelain
                                </Text>
                            </Box>
                        </Image>
                    }
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                    <Text align="left" bold size="xl">
                        <Link href="https://pinterest.com">
                            <Box paddingX={3} paddingY={2}>
                                몽상
                            </Box>
                        </Link>
                    </Text>
                    <Button
                        accessibilityLabel="Follow James Jones"
                        color="red"
                        text="참석하기"
                    />

                </Card>

            </Box>
        );
    }
}


export default Poster
