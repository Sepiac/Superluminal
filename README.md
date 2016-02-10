# Superluminal
Command line based space ship management game.

The player should think of themselves as operating a spacecraft via a terminal on the ship. The ship's functionality is grouped by systems. The pilot interacts with said systems via commands of the following format:

*system* *command* *args*

For example, to navigate to an adjacent star system named "Sol", the player would have to type

**navigation jump Sol**

There is more documentation to come, but for now the available commands can be researched by viewing the function names within the various ship system files.

##NOTE:

In order to make use of a system's functionality, the system must be powered and activated. To expand on the previous navigation example, here is what the player would have to do to complete that jump from a completely powered down ship:

**power activate**

**navigation activate**

**navigation jump Sol**
