import React from 'react';

class Pokemon extends React.Component {
    render(){
        return (
            <div className='pokemon-info'>
                <span className='pokemon'>{this.props.pokemon.name}</span>
                <span className='pokemon'>{this.props.pokemon.type}</span>
                <span className='pokemon'>Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</span>
                <a target='blank' href={this.props.pokemon.moreInfo}>
                    <img className='img' src={this.props.pokemon.image} alt={this.props.pokemon.name}/>
                </a>
            </div>
        )
    }
}

export default Pokemon