  this.pubnub.getMessage('channel1', (msg) => {
    console.log(msg);
  }, 20);

  this.pubnub.getMessage('channel2', 30);