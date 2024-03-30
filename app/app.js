import React, { Component } from 'react'
import mongodb from "../mongodb/mongo.js"

export class app extends Component {
  render() {
    return (
        mongodb.connectToMongoDB()
    )
  }
}

export default app
