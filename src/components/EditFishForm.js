import React from "react";
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            status: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func
    }
    handleChange = (event) => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)
    };

    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}></input>
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}></input>
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fesh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}></input>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        );
    };
};


export default EditFishForm;