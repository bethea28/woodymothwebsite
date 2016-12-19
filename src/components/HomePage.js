import React from 'react';
import {Link} from 'react-router'

var HomePage = React.createClass({
  render: function() {
    return (
      <div className ='mainDiv' className>

        <div className='homeHeader'>
        	<h1 id='homeHeader' >Woody Moth</h1>
        </div>

        <hr / >
        <div className='mainImage'>

        <img id='mainImage'  src="https://static1.squarespace.com/static/543a44e5e4b0bb7eef74ab02/t/5709a2d0b09f959184ddb112/1460249325223/homepg.png?format=1000w"/>
        </div>

        <h1 className='featureHeader'>if you WOOD!...you could!</h1>

        <hr/ >
        
        <Link>
          <img className ="featureItems" src="https://static1.squarespace.com/static/543a44e5e4b0bb7eef74ab02/545910afe4b063261385e18c/54591745e4b032522b1e2dba/1415125426209/transDSC00003.png?format=300w"/>
        </Link>

        <Link>
          <img className ="featureItems" src="https://static1.squarespace.com/static/543a44e5e4b0bb7eef74ab02/545910afe4b063261385e18c/545915fce4b0636e0571758f/1415125395322/transzeb.png?format=300w"/>
        </Link>


        <Link>
          <img className ="featureItems" src="https://static1.squarespace.com/static/543a44e5e4b0bb7eef74ab02/545910afe4b063261385e18c/545917f5e4b006c7bb9c1e5a/1415125481267/transIMG_4412.png?format=300w"/>
        </Link>

        <Link>
          <img className = "featureItems" src="https://static1.squarespace.com/static/543a44e5e4b0bb7eef74ab02/545910afe4b063261385e18c/54591345e4b02bc40740ef0f/1415125353204/transIMG_4395.png?format=300w"/>
        </Link>




      </div>
    )
  }

})

export default HomePage;
