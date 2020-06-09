[Hey Dev! Welcome back to another video.](https://seanmcp.github.io/videos/title-screen/?title=How%20To%20Set%20Breakpoints%20In%20Firefox%20DevTools&version=true)

Today we're going to learn how to set breakpoints in the Firefox DevTools.

For this video, I'm going to be using Firefox <VERSION>. Let's jump in.

To illustrate this, we're going to use this simple counter I created. If you want to follow along, the link will be in the description.

A breakpoint is a an intentional pausing place in a program. When the JavaScript engine hits a breakpoint, it will stop everything and give you a window into your code at that point.

In Firefox, you can set breakpoints in the Debugger tab of the DevTools. To open the Debugger, you can use the keyboard shortcut control shift z or command option z.

Once the Debugger is up, you can open a file with the shortcut control or command p. I know that all the JavaScript for this page is in `counter.js`, so I'm going to start typing... and click on the file.

Now we can see the code for this counter.

To set a breakpoint, you can either click on the line number that you want to pause before, or use the shortcut control or command b.

So I'm going to go to this `updateCount` function and set a breakpoint on line 11. This blue tag indicates that a breakpoint has been set.

When I go back to the counter and hit the increment button, we hit that breakpoint and the code execution stops.

To continue, you can hit play at the top of the window or here in the debugger.

To remove that breakpoint, you can either click tag, use the keyboard shortcut, or right click "Remove Breakpoint".

The second type of breakpoint that we're going to add is a condition. This will break when code your provide evaluates to a truthy value.

Let's take a look at the increment button's click event listener. Let's say I want to break only when the next value is greater than five. So on line 21 I can set a condition breakpoint by right clicking and selecting "Add a condition" or using the shortcut.

When I do that, this command line opens with two orange chevrons. Here I'll type my condition, `next > 5`, and hit return or enter. Now we have this orange tag that indications that a condition breakpoint has been set.

When I go back to the counter and go up, nothing happens because the condition hasn't been met. But when I hit a value greater than five, the breakpoint is hit.

To remove that breakpoint, you can click the tag, use the keyboard shortcut, or right click "Remove Breakpoint".

The third type of breakpoint that we're going to add is a log point. This won't pause the execution of your code, so it's not realy a _break_ point, but it will log a value when the engine gets to that line.

This is the easiest way to log something in your code -- much faster than editing the source, saving, and waiting to refresh the page.

Back up at the top, I'm going to go into the `getCountValue` function and want to add a log on line 7. To do that I can right click on the line and click "Add log" or use the shortcut.

Now a command line opens with two purple chevrons. Here I can type my log, `console.log(value)`, and hit return or enter. This purple and pink chevron let's us know that a log has been set on this line.

If I go over to the console and change the counter, I can see that log with a tag to indicate that it came from our log point.

To remove the breakpoint, I can click the tag, use the keyboard shortcut, right click "Remove breakpoint", or remove it from the "Breakpoints" section in the debugger.

In this video we learned how to set breakpoints, condition breakpoints, and logpoints in the Firefox DevTools; and how to remove them.

That's all for now. I'll see you in the next video.
