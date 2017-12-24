import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import Carusel from './Carusel';
import axios from 'axios';
export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemsData: [],
            lat: 1,
            lng: 2
        }
    }
    componentWillMount() {
        const id = Number(this.props.match.params.id)
        // console.log(id)
        axios.all([axios.get('/static/data/items.json'), axios.get('/static/data/country.json'), axios.get('/static/data/city.json')])
            .then(axios.spread((it, count, ct) => {
                const itemsDt = it.data;
                const country = count.data;
                const city = ct.data;
                const items = itemsDt.filter(item => {
                    const el = item.countryId;
                    return item.countryId = country[el].country
                });
                const itData = items.filter(item => {
                    const el = item.cityId;
                    return item.cityId = city[el].city
                });
                const itemsData = itData[id - 1];
                const lat = parseFloat(itemsData.lat);
                const lng = parseFloat(itemsData.long)
                //  console.log(itemsData)
                this.setState({
                    itemsData, lat, lng
                })
            }))

            .catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            })
    }

    render() {
        return (
            <div>
                <div className="container nop">
                    <div className="row" >
                        <div className="col-lg-12">
                            <Carusel imgUrl={this.state.itemsData.imgUrl} imgUr1={this.state.itemsData.imgUr1} imgUr2={this.state.itemsData.imgUr2} />
                            {/*<img src={this.state.itemsData.imgUrl} className="nop" />*/}
                        </div>
                    </div>
                </div>
                <div className="container mjn">
                    <div className="row" >
                        <div className="col-lg-6">
                            <h2>{this.state.itemsData.name}</h2>
                            <p>Reviews :<mark> {this.state.itemsData.reviews}</mark></p>
                            <p>Price : <mark>{this.state.itemsData.price}</mark></p>
                            <div>
                                <p>Country : <mark>{this.state.itemsData.countryId}</mark></p>
                                <p>City : <mark>{this.state.itemsData.cityId}</mark></p>
                            </div>
                            <div>
                                <h3>Details</h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Molestiae dolore veniam ad officia esse, vitae ducimus obcaecati voluptas iure nesciunt, unde eaque saepe nihil,
                             odit. Quo odio facere, beatae provident voluptatibus nemo, mollitia adipisci, officiis laudantium ipsa quasi?
                             Necessitatibus ullam pariatur temporibus libero. Quod optio reprehenderit ullam ex ipsum dignissimos?
                           </p>
                            </div>
                            <button className="btn btn-primary mjn" type="submit">Buy now</button>
                        </div>
                        <div className="col-lg-6">
                            <GoogleMap lat={this.state.lat} lng={this.state.lng} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}