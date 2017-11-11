...

componentWillMount() {
  this.pubnub.getPresence('channel1', (presence) => {
    console.log(presence);
  });

  ...
}

render() {
  const presence = this.pubnub.getPresence('channel1');
  return (
    <View>
       <Text>{presence.action}</Text>
    </View>
  );
}

...
