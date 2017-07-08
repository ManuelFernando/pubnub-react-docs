...

componentWillMount() {
  this.pubnub.init(this);

  this.pubnub.getPresence('channel1', (presence) => {
    console.log(presence);
  });

  ...
}

render() {
  const presence = this.pubnub.getPresence('channel1');
  return (
    <div>
      <p>{presence.action}</p>
    </div>
  );
}

...
