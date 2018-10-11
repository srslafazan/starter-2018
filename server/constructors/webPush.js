const webpush = require('web-push');
 
const vapidKeys = {
  privateKey: 'OqBphSyBCUjilRkj7fqMGzkaYRGlBg20OGwU4I11bUA',
  publicKey: 'BHEa09WcrSPva3MOvSIXlsGRqEVlfjOvVrT-S5_T__9U9uImayVsaa7xfT8d0Cx_5A3hBIV5lB7fiCsMWdbS5mE',
}
// webpush.setGCMAPIKey('142559804913');
webpush.setVapidDetails(
  'mailto:shain.codes@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

module.exports.sendNotification = async (subscription, dataToSend) => {
  const res = await webpush.sendNotification(subscription, dataToSend)
  .catch((err) => {
    if (err.statusCode >= 400) {
      console.log('Subscription is invalid: ', err)
    }
  })
}

module.exports.default = webpush
