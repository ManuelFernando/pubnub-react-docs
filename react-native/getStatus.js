...

componentWillMount() {
  this.pubnub.getStatus((status) => {
    console.log(status);
  });

  ...
}

render() {
  const status = this.pubnub.getStatus();
  return (
    <View>
       <Text>{status.category}</Text>
    </View>
  );
}

...
