const axios = require('axios')
const cheerio = require('cheerio')
const url = 'http://dashiramen.com/'
let response

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    const res = await axios(url)
    const html = res.data
    const $ = cheerio.load(html)
    var sadText = $('h3').filter(function () {
      return $(this).text().toLowerCase().indexOf('sadly, we have decided to suspend all service') > -1
    }).text()

    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://ramenchecks.com',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        sadText,
        hasSadText: !!sadText
      })
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
