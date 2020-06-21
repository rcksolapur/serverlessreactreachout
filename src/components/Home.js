import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';
import logo from './assets/img/reachout.png';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/Article-List.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-Clean.css';
import './assets/css/Team-Boxed.css';

import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
      <div className="ReachoutHomePage Back-component">
      <div className="d-flex masthead">
        <div className="container my-auto text-center" style={{height: '100px'}}>
            <h1 className="mb-1" style={{color: '#f4e287'}}>ReachOut</h1>
            <h3 className="mb-5"><em style={{color: '#7cf4e6'}}>... and be for each other</em></h3>
            <div className="table-responsive table-borderless">
                <table className="table table-bordered">
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <h2>Who and what are we!</h2>
                <p className="lead mb-5"><span>Text About the application</span><span>!</span></p>
            </div>
        </div>
    </div>
    </div>
  )
}
