# Delete Messages Faster on LinkedIn (Manual Process)

## Updated: 07/17/2017

LinkedIn is a platform that many of us rely on for staying connected with our current and former colleagues. For some of us - it's an excellent tool for finding a new job, or looking for new talent.

Out of the many things that LinkedIn does right - there's one missing feature that caught my attention. The ability to quickly delete all of your messages from your inbox and have a fresh start.

While I have always been an advocate for archiving important messages, I have found that the 'shotgun' approach certain recruiters attempt leads to many unspecific messages that I'm not entirely sure what to do with. I know for certain that after several years, it has become more difficult to find what I'm looking for in my inbox.

## Purpose

This is a simple script that will allow non-technical LinkedIn users to clear their messages in a much quicker fashion without having to read documentation on LinkedIn's API or have any technical know-how. This is simply for those who want to click a button, occassionally reset the target, and keep clicking one button, without having to move the cursor and open the confirmation dialogue box.

## How to Use

1. Visit LinkedIn.com on Google Chrome from your personal computer running Mac, Windows or Linux.

2. Click 'Messaging' button in the top navigation menu.

3. Right mouse click anywhere on your screen and select 'Inspect' at the bottom of the menu.

4. This window may seem complicated, but don't worry! Click 'Sources' in the very top row.

5. Look at the left menu. If it's not expanded, click '>>'. Select 'Snippets'.

6. Copy (CMD + A on Mac, CTRL + A on Windows) and paste everything from the 'deleteAllMessages.js' file from this project into the 'Script snippet #1' window you see in your web browser.

7. Make sure you have clicked on a message in your LinkedIn inbox this ensures that the script will be able to target the right elements.

8. Look back at your 'Snippet' window, look at the bottom where you see a play button (triangle pointing right).

9. Start clicking that button repeatedly! (But not too fast, give it half a second to breathe!)

10. Once you run out of messages, LinkedIn will fetch more. Make sure that you click onto the latest message after the reset like you did in step 7!

11. Rinse and repeat.

12. You're done! Enjoy your clean inbox!

## Notes (This part is for anyone that's curious about the technical stuff)

I initially tried to automate the process by looping through all of the messages while the condition of an author name existed. This let the script know that there were still more messages. It worked fine in implementation, however it appears that LinkedIn was not happy with all of the requests and ultimately served me a 'Request Denied' error page with a catch-all 999 error code. I then introduced several timeouts to the script, but was not seeing any difference. If you know of a good workaround - feel free to open a pull request or just let me know!

## TODO

Might make this a Chrome plugin. Hopefully LinkedIn implementals checkboxes and a 'Select All' in the message center in order to help manage the inbox, in which case none of this will be necessary! In the meantime, this is what I ended up writing/using.
