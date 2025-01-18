This error occurs when using Expo's `Linking` API to handle deep links.  The `Linking.addEventListener` function might not trigger if the app is already open and receives a deep link.  This is because the event listener is only attached when the app initially starts. If the app is already running and receives a deep link, the listener won't be activated causing the deep link to be ignored. 