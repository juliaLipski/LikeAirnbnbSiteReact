import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default class Carusel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 2
        };

    }
    render() {
        return (
            <div >
                <StyleRoot className="nop">
                    <Coverflow
                        width={1500}
                        height={600}
                        displayQuantityOfSide={0.8}
                        navigation={true}
                        enableHeading={true}

                    >
                        <img src={this.props.imgUrl} alt='room' data-action="https://facebook.github.io/react/" />
                        <img src={this.props.imgUr1} alt='room' data-action="http://passer.cc" />
                        <img src={this.props.imgUr2} alt='room' data-action="https://doce.cc/" />
                        <img src={this.props.imgUrl} alt='room' data-action="http://tw.yahoo.com" />
                    </Coverflow>
                </StyleRoot>
            </div>
        )
    }
};