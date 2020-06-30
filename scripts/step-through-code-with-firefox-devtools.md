Here I have a simple counter app. You can increase the count by clicking "+1", or decrease it by clicking "-1".

If you want to follow along, there will be a link in the description.

To debug a counter app, first open the dev tools.

You can use the keyboard shortcut control-shift- or command-option-I, or right-click anywhere on the screen and select "Inspect Element".

With the dev tools open, click on the "Debugger" tab. Now we want to open our JavaScript to start debugging.

I'm going to use the "Open file" shortcut control- or command-P, and then type the name of the file: `counter.js`

When I select that from the listbox, Firefox opens that file in the sources pane. Now I can see all the code necessary to run this counter.

Before trying to fix an error, we first need to learn how this code works.

So I'm going to look for a function that I can tie to an action in the browser. Scanning through, this `handleIncrement` seems like a good starting point.

I'll add a breakpoint on the first line within the function by clicking on the line number (17).

Back in the window, I'll click the "+1" button which should call this function. You can see by the overlay that the breakpoint has been hit and the code execution is paused.

At any time while debugging, you can hit the play button in the window or toolbar to resume the execution. So if you get lost or confused, just hit play and start again.

I'll do that. Hit play, exit debug mode, and then click the "+1" button again to hit the breakpoint.

Back in the source pane, I can see that the `getCountValue` function is highlighted. That means I can click this downward arrow to "Step In" to this function.

Stepping is the main way we can travel throughout our JavaScript code. By moving in an our of called functions, we can start to get a sense of how the code works.

Look down in the "Call stack" section. Here we can see all of the code that brought us to this point.

We started off with an anonymous event listener, which called `handleIncrement`, which called `getCountValue`. Wherever you break, you will be able to see the "breadcrumbs" that brought you to this point.

Looking in the sources pane, we can see that the debugger is highlighting the `count` variable. If I hover over with my mouse, I can learn more about the it.

All of this information is like a super console.log. Not only can I see every property, but I can open the collapsed ones to learn more.

When I hover over `value`, however, it just says "undefined". That's because we have paused before this line is executed.

So while the `count` variable is available because it was declared previously, we are still waiting on `value`.

We can view the variables that are available to us when debugging by clicking on the "Scopes" section of the side pane.

Here we can see all the variables within the `getCountValue` function: `this` (which is the `Window` object), `arguments`, and `value` and `valueAsNumber`, which are "uninitialized".

If we go one level higher in "Block", we can see all the variables that are available at this point. Here we see our `count` variable, which was declared at the top of the file.

The highest level is "Window: Global", which has some global variables that may have been added by your code, external dependencies, or browser extensions.

Let's close "Block" and "Window" and focus on this function's scope. Keep an eye on the `value` variable.

When I click the arcing arrow to "Step over" this line, we can see the now initialized variable's value.

Rather than keeping an eye on these variables in "Scopes", we can go the "Watch expressions" section and tell the debugger exactly what we want to keep an eye on.

In this "Add watch expression" box, I'm going to type the name of the variable that I want to watch: `valueAsNumber`.

Initially this is "unavailable", because the variable hasn't been initialized. When I step this line, the value automatically updates.

Now I can see that `value` is a string, but `valueAsNumber` is a number.

We're just watching a variable here, but you can watch any type of expression.

If we click the "+" icon, we can add something like `valueAsNumber * 5` and hit enter or return, the debugger will evaluate the epxression.

To remove watched expressions, click the "x" icon to the right.

Looking back in the sources pane, I've come to the `return` of this function. If I click "Step over" once more, I'll come to the closing brace. This is the end of the road for `getCountValue`.

When I click "Step over", I will return to the previous function call. Checking the "Call stack", I can see that that will be `handleIncrement`.

And sure enough, I'm back to where I started, just one line later. This is the same behavior as clicking this up-and-over arrow to "Step out" of a function call.

Let's illustrate that real quick. I'll hit play to exit debug mode, then click "+1" to enter again. Now I'm going to click the "Step in" button to enter `getCountvalue`.

Instead of stepping all the way through, though, I'm going to click "Step out". That brings me back to `handleIncrement` on the line after my breakpoint.

When you're debugging, you may find yourself stepping in an out of functions to briefly check the flow of data. Don't feel like you need to step over every single line of code.

Now when I hover over `next` I can see that we have used the value returned from `handleIncrement` to determine the next number.

The `updateCount` function is highlighted, so let's "Step in" to that. This function assigns the passed argument to the `count` element's `value` property.

I'm not going to bother stepping here; I'll click "Step out" to return to the original function.

Now I'm at the final brace of my original function. So when I click "Step over" once more, I will exit debug mode.

And remember: you can click the play button at any time to "Resume" execution. Only step through when you are interested in each line.

<!-- In this video we learned how to step through code in the Firefox DevTools. We learned how to set breakpoints, and step over, in, and out of functions. We looked at the "Call state", "Scopes", and "Watch expressions" sections of the debugger. -->

That's all for now; I'll see you in the next video.
