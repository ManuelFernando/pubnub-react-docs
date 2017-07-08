this.pubnub.history({
  channel: 'my_channel',
  reverse: false, // false is the default
  count: 100, // 100 is the default
  stringifiedTimeToken: true // false is the default
},
(status, response) => {
  console.log(response);
});
