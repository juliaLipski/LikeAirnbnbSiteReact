import React, { Component } from 'react';
import axios from 'axios';
import Info from './Info';
import Search from './Search';
import DataHome from './DataHome';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemsData: [],
            filtered: []
        }
    }
    handleSetData(filtered) {
        this.setState({ filtered: filtered })

    }

    getData() {
        axios.all([axios.get('/static/data/items.json'), axios.get('/static/data/country.json'), axios.get('/static/data/city.json')])
            .then(axios.spread((it, count, ct) => {
                const itemsDt = it.data;
                const country = count.data;
                const city = ct.data;
                const items = itemsDt.filter(item => {
                    const el = item.countryId;
                    return item.countryId = country[el].country
                });
                const itemsData = items.filter(item => {
                    const el = item.cityId;
                    return item.cityId = city[el].city
                });
                this.setState({
                    itemsData
                });

            }))
            .catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            })

    }


    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <div className="container color search align-items-center justify-content-around">
                    <Search data={this.state.itemsData} filterS={this.handleSetData.bind(this)} />
                </div>
                <div>
                    <Info />
                </div>
                <div>
                    <DataHome data={this.state.filtered.length == 0 ? this.state.itemsData : this.state.filtered} />
                </div>
            </div>
        )
    }
}
