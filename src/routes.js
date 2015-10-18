var React = require('react')
var {IndexRoute, Route} = require('react-router')

var App = require('./App')
var Item = require('./Item')
var NotFound = require('./NotFound')
var PermalinkedComment = require('./PermalinkedComment')
var Stories = require('./Stories')
var Updates = require('./Updates')
var UserProfile = require('./UserProfile')

function stories(route, type, limit, title) {
  return React.createClass({
    render() {
      return <Stories {...this.props} key={route} route={route} type={type} limit={limit} title={title}/>
    }
  })
}

function updates(type) {
  return React.createClass({
    render() {
      return <Updates {...this.props} key={type} type={type}/>
    }
  })
}

var Ask = stories('ask', 'askstories', 200, 'Ask')
var Comments = updates('comments')
var Jobs = stories('jobs', 'jobstories', 200, 'Jobs')
var New = stories('newest', 'newstories', 500, 'New Links')
var Show = stories('show', 'showstories', 200, 'Show')
var Top = stories('news', 'topstories', 500)

module.exports = <Route path="/" component={App}>
  <IndexRoute component={Top}/>
  <Route path="news" component={Top}/>
  <Route path="newest" component={New}/>
  <Route path="show" component={Show}/>
  <Route path="ask" component={Ask}/>
  <Route path="jobs" component={Jobs}/>
  <Route path="item/:id" component={Item}/>
  <Route path="job/:id" component={Item}/>
  <Route path="poll/:id" component={Item}/>
  <Route path="story/:id" component={Item}/>
  <Route path="comment/:id" component={PermalinkedComment}/>
  <Route path="newcomments" component={Comments}/>
  <Route path="user/:id" component={UserProfile}/>
  <Route path="*" component={NotFound}/>
</Route>