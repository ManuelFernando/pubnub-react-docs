...

componentWillMount() {
  this.pubnub.init(this);

  this.pubnub.getMessage('channel1');

  ...
}

render() {
  const messages = this.pubnub.getMessage('channel1');
  return (
    <View>
      {messages.map((m) => <Text>{m.message}</Text>)}
    </View>
  );
}

...
