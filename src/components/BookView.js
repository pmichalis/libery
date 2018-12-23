import React from 'react';


export default class BookView extends React.Component {


    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
                <p>{this.props.book.description}</p>
                <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/> 
                <button className="btn btn-danger" onClick={ (event) => this.props.addToOrder(this.props.book)}>Add to order</button>
            </div>
                
        );
    }
    
}