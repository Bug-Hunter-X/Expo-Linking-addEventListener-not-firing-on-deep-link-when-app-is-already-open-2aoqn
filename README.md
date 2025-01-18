# Expo Linking EventListener Bug

This repository demonstrates a bug in Expo's `Linking` API where `Linking.addEventListener` fails to trigger when a deep link is received while the app is already running.  The issue arises because the event listener is only added once, during the app's initial launch.  Subsequent deep links, while the app is in the foreground, are not handled correctly.

## Bug Reproduction

1. Clone this repository.
2. Run `expo start`.
3. Open the app.
4. Navigate to a deep link. This will work correctly.
5. Close the app.
6. Open the app again.
7. Navigate to the same deep link. The app will not register the deep link.

## Solution

The solution involves adding a check within `componentDidMount` to make sure that the listener is added every time the component mounts rather than just once during the initial launch of the app.  This is demonstrated in `LinkingBugSolution.js`.