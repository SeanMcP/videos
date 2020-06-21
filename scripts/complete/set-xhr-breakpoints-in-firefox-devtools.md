Hey dev and welcome back to another video.

Today we're going to learn how to set XHR breakpoints in the Firefox DevTools

For this video, I'll be using Firefox version <VERSION>

Let's jump in.

Here I have a simple app where I can make different network requests to an endpoint. If you want to follow along, I'll leave a link in the description.

XHR, or XML HTTP Requests, are network requests from the client to an API. XHR's let your application communicate with other programs.

When debugging requests, it's nice to be able to set XHR breakpoints to see when your code makes a request and what happens next.

To set an XHR breakpoint, you need to open the devtools. So use the keyboard shortcut control shift I or command option I. Then head over to the Debugger tab.

All breakpoints are listed in the debugger pane, so let's open "XHR Breakpoints".

Here we can set a breakpoint on "any URL." That seems a good place to start, so let's click that.

Now when we go back to our app and make a network request in the window, we hit a breakpoint.

Notice how the source pane opens to the HTML, and not our JavaScript. If we look here in the "Call stack", we can see that the debugger is breaking on `fetch`, which exists on the window object.

If we want to see where fetch is being called, we need to go down a step on the stack and see this `handleClick` in `request.js`. That's more like it.

When I click this line on the call stack, the source pane jumps to that line and we can see that the debugger has paused here.

From this point, I can step through my code using the debugging toolbar. Once I'm done, I can hit play here or back in the window.

Breaking on all URLs is nice at times, but it will get noisy if your app is making a lot of requests.

Let's remove that breakpoint by unchecking this box.

To set a more specific breakpoint, you can click on this "+" icon or the "Break when..." text area. This gives us the option to set a path AND a method to break on.

So let's say I want to break on all `PUT` requests. I'll select the "PUT" option and enter a forward slash that will match all requests. Then hit enter. I can see that a new breakpoint has been set on all `PUT` requests with a slash.

Now when I go back to my app, I don't hit a breakpoint until the method and path match. (Hit `PUT`)

Let's play to continue. I can disable that breakpoint by unchecking this box, or remove it entirely by click the "X".

If you want to break on a specific url or even a fragment in a url, you can select "ANY" from the menu and put that path. Let's put "et", because that will match two of my urls. To set the breakpoint, hit enter or return.

(Go right to left this time) Just like before, the breakpoint will only hit when both conditions are met. So we break on `GET` AND `DELETE` requests, because both urls have an "et" in them.

Finally, I'll remove that breakpoint by clicking the "X".

In this video, we learned how to set and remove XHR breakpoints in the Firefox DevTools. We learned to break on all requests, or break based on a method and/or url matching.

That's all for now. I'll see you in the next video.
