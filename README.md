git# Superluminal
Command line based space ship management game.

##Overview

The player should think of themselves as operating a spacecraft via a terminal on the ship. The ship's functionality is grouped by systems. The pilot interacts with said systems via commands of the following format:

*system* *command* *args*

For example, to navigate to an adjacent star system named "Sol", the player would have to type

**navigation jump Sol**

There is more documentation to come, but for now the available commands can be researched by viewing the function names within the various ship system files.

###NOTE:

In order to make use of a system's functionality, the system must be powered and activated. To expand on the previous navigation example, here is what the player would have to do to complete that jump from a completely powered down ship:

**power activate**

**navigation activate**

**navigation jump Sol**

##System instructions

This section contains detailed instructions on the various systems. This is a work in progress, so if you do not find what you need here you very well may find it at a later date.

###Ship

The ship system is the backbone of your ship's systems. It containes the rest of the systems as well as all of the important information you need to know while piloting your ship such as energy, food, oxygen, etc.

####Commands

* ship status: This command is your window into the current state of the ship. All vital information may be found by running this command.