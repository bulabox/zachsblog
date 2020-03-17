import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
    render() {
        const ads = process.env.NODE_ENV === 'production' &&
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" /> ;
        return (
            <html {...props.htmlAttributes}>
            <head>
                {ads && ads}
                {props.headComponents}<title/>
            </head>
            <body {...props.bodyAttributes}>
            {props.preBodyComponents}
            <noscript key="noscript" id="gatsby-noscript">
                This app works best with JavaScript enabled.
            </noscript>
            <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{__html: props.body}}
            />
            {props.postBodyComponents}
            </body>
            </html>
        )
    }
}

    HTML.propTypes = {
        htmlAttributes: PropTypes.object,
        headComponents: PropTypes.array,
        bodyAttributes: PropTypes.object,
        preBodyComponents: PropTypes.array,
        body: PropTypes.string,
        postBodyComponents: PropTypes.array,
    };
