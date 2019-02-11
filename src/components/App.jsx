import React from 'react'
import { connect } from 'react-redux'

const App = ({ username }) => (<h1>hello {username}</h1>)

const mapStateToProps = state => ({
	username: state.user.username
})

export default connect(mapStateToProps)(App)