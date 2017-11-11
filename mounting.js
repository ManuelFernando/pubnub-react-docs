componentWillMount() {
  this.pubnub.subscribe({ channels: ['channel1']});
  
  this.pubnub.getMessage('channel1', (msg) => {
    console.log(msg);
  });
}
