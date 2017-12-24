import React, { Component } from 'react';

export default class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: "",
            to: "",
            guests: "",
            city: "",
            arrF: []
        }

    }
    handleSubmit(event) {
        event.preventDefault();
        let from = this.state.from;
        let to = this.state.to;
        let guests = this.state.guests;
        let city = this.state.city
        let data = this.props.data;
        let newData = data.filter(it => {
            return it.cityId.toLowerCase().includes(from.toLowerCase());
        })

    }
    filter(event) {
        event.preventDefault();
        let data = this.props.data;
        let arrF = this.state.arrF;
        let from = this.state.from;
        let to = this.state.to;
        let guests = this.state.guests;
        let city = this.state.city
        arrF = data.filter(it => {
            return it.max_Guests >= guests && it.cityId === city && it.price < to;

        })
        this.props.filterS(arrF)
    }
    getValPriceFrom(event) {
        event.preventDefault();
        let input = event.target.value;
        this.setState({ from: input })
    }
    getValPriceTo(event) {
        event.preventDefault();
        let input = event.target.value;
        this.setState({ to: input })
    }
    getValGuests(event) {
        event.preventDefault();
        let input = event.target.value;
        this.setState({ guests: input })
    }
    getValCity(event) {
        event.preventDefault();
        let input = event.target.value;
        this.setState({ city: input })
    }
    render() {
        return (
            <div className="container">
                <form className="row " onSubmit={(event) => this.filter(event)}>
                    <span className="input-group-addon col-lg-1">From</span>
                    <input type="text" className="" placeholder="100$" required onChange={(event) => this.getValPriceFrom(event)} />
                    <input type="text" className="" placeholder="899$" required onChange={(event) => this.getValPriceTo(event)} />
                    <span className="input-group-addon col-lg-1"> To</span>
                    <select className="custom-select col-lg-2" onChange={(event) => this.getValCity(event)}>*/}
                             {
                            this.props.data.map((item) =>
                                <option key={item.id} value={item.cityId}>{item.cityId}</option>
                            )
                        }
                    </select>
                    <select className="custom-select col-lg-2" onChange={(event) => this.getValGuests(event)}>*/}
                            <option value="guests">guests</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <div className=" col-lg-2">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </form>
            </div>
        );
    };
}
