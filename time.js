this.pubnub.time((status, response) => {
  if (status.error) {
    console.log(status.error);
  } else {
    console.log(response.timetoken);
  }
});
