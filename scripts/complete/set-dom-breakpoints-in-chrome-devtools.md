## Introduction

Hey Dev and welcome back to another video.

Today we are going to learn how to set DOM breakpoints in the Chrome DevTools.

For this video, I will be using Chrome version <VERSION>

Let's jump in.

I'm going to be using `DOM` Break for these examples, and I'll leave a link for it down in the description.

## Subtree modification

The first type of DOM breakpoint is "Subtree Modification." This is when anything is added to or removed from the tree at a specific point.

I'm going to right-click "Inspect" on this gray box. This will open the DevTools with that element highlighted.

Then right-click the element > "Break on..." > "Subtree Modification"

This blue tag on the left indicates that a breakpoint has been set.

Now when I click "Add a node," we hit that breakpoint and the Sources tab opens.

To continue, hit the play button in Sources or the window.

To remove the breakpoint, I can clear it here in Sources.

Once again, to set a "Subtree Modification" breakpoint, right-click an element in "Elements" > "Break on..." > "Subtree Modification".

## Attribute modification

The second type of DOM breakpoint is "Attribute Modification." This will break when there are changes to the attributes on a selected element.

I'm going to right-click "Inspect" on this outlined paragraph. Then right-click the element > "Break on..." > "Attribute Modification"

We can see the blue breakpoint indicator, so we know it's working.

Now when I select one of these style buttons, I hit the breakpoint. To contiue, I'll hit play.

To remove the breakpoint, I can clear it in Sources or go to the Elements, right-click, and unselect that breakpoint.

Once again, to set an "Attribute Modification" breakpoint, right-click an element > "Break on..." > "Attribute Modification"

## Node removal

The third type of DOM breakpoint is "Node Removal". This will break when the selected element is removed.

Let's go back up to the first example and add a node. Now I'm going to right-click "Inspect".

Next, I'm going to right-click the element > "Break on..." > "Node removal"

Now when I click the element, we hit the breakpoint. To continue, hit play.

Unlike the other examples I don't need to clear the breakpoint because it was removed with its element.

Once again, to set a "Node Removal" breakpoint, right-click an element > "Break on..." > "Node Removal".

## Conclusion

In this video, we learned how to set `DOM` breakpoints in the Chrome DevTools. Specifically, we looked at "Subtree Modification", "Attribute Modification", and "Node Removal" breakpoints and how to clear them.

That's all for now. I'll see you in the next video.
