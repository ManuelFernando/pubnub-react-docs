constructor(props) {
  super(props);
  this.pubnub = new PubNubReact({ publishKey: 'YOUR PUBLISH KEY', subscribeKey: 'YOUR SUBSCRIBE KEY' });
  this.pubnub.init(this);
}
