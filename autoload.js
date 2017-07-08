this.pubnub.subscribe(
  {
    channels: ['myChannel1'],
    triggerEvents: true,
    withPresence: true,
    autoload: 100
  });

  let messages = this.pubnub.getMessage('myChannel1', () => {
    console.log(messages);
  });
