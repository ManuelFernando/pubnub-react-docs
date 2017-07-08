this.pubnub.hereNow({
  channels: ["my_channel"],
  channelGroups : ["my_channelGroup"],
  includeUUIDs: true,
  includeState: true
},
(status, response) => {
  console.log(status);
  console.log(response);
});
