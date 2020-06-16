var Discogs = require('disconnect').Client

const userToken = 'ABnBUcgJHbfGVzsmwfpFLeMDzoBRHXWWbQsLnIWt'

class DiscogsClient {
  constructor () {
    this.discogsClient = new Discogs('AaronsUserAgent/1.2', { userToken: userToken })
    console.log('newd up client')
    console.log(JSON.stringify(this.discogsClient))
  }

  getCollection (page, pageSize) {
    var collection = this.discogsClient.user().collection()
    console.log('col = ')
    console.log(JSON.stringify(collection))
    console.log(`ollection.getReleases('atsnipes', 0, { page: ${page}, per_page: ${pageSize} })`)
    collection.getReleases('atsnipes', 0, { page: page, per_page: pageSize })
      .then(function (releases) {
        return releases
      })
  }

  getStuff () {
    var db = this.discogsClient.database()
    db.getRelease(176126, function (err, data) {
      if (err) {
        console.error(err)
      }
      console.log(data)
      return data
    })
  }

  getUser () {
    this.discogsClient.user().collection().getReleases('atsnipes', 0, { page: 1, per_page: 75 },
      function (err, data) {
        if (err) {
          console.error(err)
        }
        console.log(data)
        return data
      })
  }
}

module.exports = {
  DiscogsClient
}
