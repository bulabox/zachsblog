import React from 'react';
import AdSense from 'react-adsense';

export default class SubscribeForm extends React.Component {
    render() {
        return (
            <form name="subscribeForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="subscribe-form"
              className="subscribe-form">
              <div className="screen-reader-text">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <div className="form-row">
                <label>
                  <span className="screen-reader-text">Email address</span>
                  <input className="subscribe-email" type="email" name="email" placeholder="Enter Email Address..."/>
                </label>
              </div>
              <input type="hidden" name="form-name" value="subscribeForm" />
              <button className="button" type="submit">Subscribe</button>  
              <AdSense.Google client='ca-pub-4257311131649668' slot='7806394673'style={{ display: 'block' }}layout='in-article' format='fluid'
            </form> 
        );                   
    }
}
