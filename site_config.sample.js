var settings = {
  'bot':{
    Auth: auth+live+739daf39160c0468730f30999c39d75a090beeac
UserId: 50169ea9aaa5cd2e8c000277
RoomId: 501847a8df5bcf31c880d333
  },
  /* Optional, uncomment to have bot automatically post statuses to twitter */
  // 'twitter':{
  //   'consumerKey':'TWITTER CONSUMER KEY',
  //   'consumerSecret':'TWITTER CONSUMER SECRET',
  //   'accessToken':'TWITTER ACCESS TOKEN',
  //   'accessTokenSecret':'TWITTER ACCESS TOKEN SECRET'
  // },

  /* Optional, uncomment to use airbrake for error reporting */
  // 'airbrake':{
  //   'apikey':'airbrake api key'
  // },
  'site':{
    'title':'WEBSITE TITLE', //fettucinialfredobot
    'url':'http://http://turntable.fm/soulspot', //The url of your bot's website
    'room_link':http://turntable.fm/soulspot, //The link to the turntable.fm room for the bot
    'dburl':'' //Url to connect to your database
  }
};
    
if(process.env.NODE_ENV == 'production'){
  settings.port = 80;
}

module.exports = settings;
