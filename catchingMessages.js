...

componentWillMount() {
  this.pubnub.init(this);

  this.pubnub.getMessage('channel1', (msg) => {
    console.log(msg);
  });

  ...
}

...
