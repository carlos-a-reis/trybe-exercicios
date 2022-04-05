import React from 'react';

class Pokemon extends React.Component {
    render(){
        return (
            <div className='pokemon-info'>
                <div className='pokemon'>
                    <span>{this.props.pokemon.name}</span>
                    <span>{this.props.pokemon.type}</span>
                    <span>Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</span>
                </div>
                <a target='blank' href={this.props.pokemon.moreInfo}>
                    <img className='img' src={this.props.pokemon.image} alt={this.props.pokemon.name}/>
                </a>
            </div>
        )
    }
}

export default Pokemon