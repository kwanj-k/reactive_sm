import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import Goth from '../../../assets/images/Goth.jpg';
import '../../../assets/css/allArticles.scss';
import axiosConfig from '../../../axiosConfig';

class AllArticles extends Component {
  constructor() {
    super();
    this.state = {
        articles:[]
    };
  }

  componentDidMount() {
    axiosConfig
      .request({
        method: 'get',
        url: '/articles',
        // headers: {
        //   Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
        // }
      })
      .then(res => {
        this.setState({...res.data})
      });
  }
  articleCard () {
      console.log(this.state)
    var arr = _.values(this.state.articles.results)
    const article2 = arr.map(article =>{
        return(
            <div className="col s5 m3 ">
                <div className="card">
                    <div className="card-image">
                        <img className="articles-img" src={Goth} alt="++img" />
                        <span className="card-title">
                            { article.title }
                        </span>
                    </div>
                    <div className="card-content">
                        <p>
                            {article.description}
                        </p>
                    </div>
                    <div className="card-action">
                        <a href="#!">View</a>
                    </div>
                </div>
            </div>
        )
    })
    return (<div className="row">{article2}</div>)
  }
  render() {
    return (
      <div>
          { this.articleCard() }
      </div>
    );
  }
}

export default withRouter(AllArticles);
