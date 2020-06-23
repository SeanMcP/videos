[Title Screen](https://seanmcp.github.io/videos/title-screen/?title=Set%20XHR%20Breakpoints%20In%20The%20Chrome%20DevTools&version=true)

Hey dev and welcome back to another video.

Today we're going to learn how to set XHR breakpoints in the Chrome DevTools

For this video, I'll be using Chrome version <VERSION>

Let's jump in.

Here I have a simple app where I can make different network requests to an endpoint. If you want to follow along, I'll leave a link in the description.

XHR, or XML HTTP Requests, are network requests from the client to an API. XHR's let your application communicate with other programs.

When debugging requests, it's nice to be able to set XHR breakpoints to see when your code makes a request and what happens next.

To set an XHR breakpoint, you need to open the devtools. So use the keyboard shortcut control shift I or command option I. Then head over to the Sources tab.

All breakpoints are listed in the debugger pane, so let's open "XHR/fetch Breakpoints".

Let's start of by setting a breakpoint on all requests. First, click this "+" icon to add an XHR/fetch breakpoint. Then a text input with the prompt "Break when URL contains:".

If we leave this field blank and hit enter or return, we can see that a breakpoint has been set on "Any XHR or fetch".

Now when we go back to our app and make a network request in the window, we hit our breakpoint and the sources pane opens to the line that called `fetch`.

From this point, I can step through my code using the debugging toolbar. Once I'm done, I can hit play here or back in the window.

Breaking on all URLs is nice at times, but it will get noisy if your app is making a lot of requests.

Let's remove that breakpoint by right-clicking the breakpoint and selecting "Remove breakpoint".

You can set a more specific breakpoint based url or fragment matching. Add a new breakpoint by clicking the "+" icon. Now we can enter the url or fragment that we want to match on.

Let's put "et", because that will match two of my urls. Finally, hit enter or return.

(Go right to left) Back in the app, the breakpoint will only hit when the request URL contains that fragment. So we break on `GET` AND `DELETE` requests, because both urls have an "et" in them.

Finally, I'll remove that breakpoint by right-clicking and selecting "Remove breakpoint".

In this video, we learned how to set and remove XHR breakpoints in the Chrome DevTools. We learned to break on all requests or url matching.

That's all for now. I'll see you in the next video.
