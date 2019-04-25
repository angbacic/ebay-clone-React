import {Link} from 'react-router-dom';
import * as React from 'react';
import {Component} from 'react';

export default class AdvertsList extends Component {
    render() {
        const { adverts } = this.props
        return (
            <div >
                {!adverts && 'Loading...'}
               { 
                   adverts &&
                    <ul>{adverts && adverts.map(advert => <li key={advert.id}>
                    <Link to={`/adverts/${advert.id}`}>{advert.title}</Link></li>)}</ul>
               }
            </div>
        )
    }
}