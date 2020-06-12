[Hey Dev! Welcome back to another video.](https://seanmcp.github.io/videos/title-screen/?title=How%20To%20Set%20Breakpoints%20In%20Chrome%20DevTools&version=true)

Today we're going to learn how to set breakpoints in the Chrome DevTools.

For this video, I'm going to be using Chrome <VERSION>. Let's jump in.

To illustrate this, we're going to use this simple counter I created. If you want to follow along, the link will be in the description.

A breakpoint is a an intentional pausing place in a program. When the JavaScript engine running in the browser hits a breakpoint, it will stop everything and give you a window into your code at that point.

In Chrome, you can set breakpoints in the Sources tab of the DevTools. I'll open the DevTools with control shift or command option i, then click on the "Sources" tab.

Once that is up, you can open a file with the shortcut control or command p. I know that all the JavaScript for this page is in `counter.js`, so I'm going to start typing... and click on the file.

Now we can see the code for this counter.

To set a breakpoint, you can either click on the line number that you want to pause before, or right click "Add breakpoint".

So I'm going to go to this `updateCount` function and set a breakpoint on line 11. This red dot indicates that a breakpoint has been set.

When I go back to the counter and hit the increment button, we hit that breakpoint and the code execution stops.

To continue, you can hit play at the top of the window or here in the debugger.

To remove that breakpoint, you can either click dot, or right click "Remove Breakpoint".

The second type of breakpoint that we're going to add is a conditional. This will break when code you provide evaluates to true or truthy.

Let's take a look at the increment button's click event listener. Let's say I want to break only when the next value is greater than five. So on line 21 I can set a conditional breakpoint by right clicking and selecting "Add conditional breakpoint".

When I do that, this little prompt opens. Here I'll type my condition, `next > 5`, and hit return or enter. Now we have this half red dot that indications that a conditional breakpoint has been set.

When I go back to the counter and go up, nothing happens because the condition hasn't been met. But when I hit a value greater than five, the breakpoint is hit.

To remove that breakpoint, you can click the dot, or right click "Remove Breakpoint".

The third type of breakpoint that we're going to add is a logpoint. This won't pause the execution of your code, so it's not realy a _break_ point, but it will log a value when the engine gets to that line.

This is the easiest way to log something in your code -- much faster than editing the source, saving, and waiting to refresh the page.

Back up at the top, I'm going to go into the `getCountValue` function and want to add a log on line 7. To do that I can right click on the line and click "Add logpoint".

Now a the prompt opens again. Here I can type my log, `value`. Think of this as the arguments that you would pass to a `console.log()`. When I'm done, I can hit enter or return. This red dot with the white chevron lets us know that a log has been set on this line.

If I go over to the console and change the counter, I can see that log coming from a VM in the browser.

To remove the breakpoint, I can click the tag, right click "Remove breakpoint", or remove it from the "Breakpoints" section in the debugger pane.

In this video we learned how to set and remove breakpoints, conditional breakpoints, and logpoints in the Chrome DevTools.

That's all for now. I'll see you in the next video.
