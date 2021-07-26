theme: jekyll-theme-modernist
# Coder's Notes 📖

## **Linux: The Command Line**
**_Command Line (terminal)_** : a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

- *typically begins with a prompt. we then enter a command (ls, mkdir) followed by a command line arguments (projects). IT's important to seperate the command and argument by a space. Outputs will display from running the commands, then will be prompted again to repeat the cycle.*

**_Bash_** : "Bourne again shell" the shell is a part of the operating system that defines how the terminal will behave and look after running commands for you.


## Basic Commands

* echo : displays messages
* pwd : Print Working Directory - tells you what your current or present working directory is.
* ls : list
* cd : change directories (move to another directory)
* file : tells what type of file a particular file is


## Command Arguments

* "[ ]" : optional
* " - l " : long listing
* "(- )" : normal file
* "( d )" : directory
* "( /etc )" : not to list our current directory but instead to list that directories contents.
* "( -a )" : including hidden files.

**_Paths_** : a means to get to a particular file or directory on the system. Very important in order to be proficient.

- **_Absolute Paths_** : specify a location (file or directory) in relation to the root directory (has a forward slash)

- **_Relative Paths_** : specify a location (file or directory) in relation to where we currently are in the system (no slash)

(root directory is denoted by a single slash ( / ) and is at the very top of the Linux hierarchial structure)

## Path Arguments
* ( / ) : root directory - (absolute path request)
* ( ~ ) : tilde - shortcut for home directory
* ( . ) : dot - is a reference to your current directory (relative path)
* ( .. ) : is a reference to your parent directory (hierarchy)

## Shortcuts
1. Commands are stored history. Traverse this history using up ⬆️, down ⬇️ arrow keys to avoid re-typing commands. Use the left ⬅️ and right ➡️ arrow keys to EDIT.

2. If run cd without an argument will always take you back to home directory.

3. Tab Completion When you start typing a path (anywhere on the command line, you're not just limited to certain commands) you may hit the Tab key on your keyboard at any time which will invoke an auto complete action. If you use that before encountering the space in the directory name then the terminal will automatically escape any spaces in the name for you.

## **Linux: Important Facts**
**_EVERYTHING IS A FILE !_** a file extension is normally a set of 2-4 characters at the end of a file, which denotes the type of file it is.

### **common extensions**
* ".exe" : an executable file, or program.
* ".txt" : a plain text file.
* ".png" | ".gif" | ".jpg" : an image

Linux however is an **_Extensionless System_**. This means it ignores the extension **(name)** and instead looks inside the file to determine what **TYPE** of file it is.

**_Hidden Files_** You can hide files and directory for a variety of reasons. To make a file or directory hidden all you need to do is create the file or directory with it's name beginning with **a**.

**_CASE SENSITIVE_** Linux sees everything as distint and separate when referring to files, directories and even commands.

**_Spaces_** in files and directory names also can cause an issue since we use spaces on command line to separate items. To get around this we need to identify to the terminal that the name of file should be seen as a single command line argument.

### **Space Work Arounds**
* (' ') : Quotes - can use single or double around entire item so will be considered a single item.
* ( \ ) : Escape character - it nullifies the special meaning of the next character.
