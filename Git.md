# Git Notes 

## *Quick History lesson* 

 **Version Control** : (VCS) is a system that allows you to revisit various versions of a file or set of files by recording changes. This helps tracking modifications by individuals and being able to compare changes as well as making it easy to fix mistakes with files. 

**_Local VCS_** : entails one database on your hard disk that stores changed to the files. 

**_Centralized VCS_** : This system entails a single server storing all changes and file versions, which can be accessed by various clients. Allows programmers (teams) to have more access to member's activities and allows administration more power over privileges.

**_Distributed VCS_** : This system is in place to help prevent loss if CVS goes down by creating mirrored repositories. These data backups can be easily be placed on the server to replace any lost information. 


## **About GIT**

* Git is a DVCS - stores data in a system made up of snapshots. 
* Git relies on local operations to allow process expediency. 
* As a gatekeeper: it tracks every single change and make it difficult to loss data/files.
* Git has 3 main states: 
    1. *Committed* : data is securely stored in local database
    2. *Modified* : File has been changed but not stored to database
    3. *Staged* : File's changed version is flagged to be commited in next snapshot.
* Git includes inherent Graphic User Interface and default text editor


### Basic Git Commands

* _git config_ -  allows the setting of configuration variables that control aspects of Git’s operation and look.
* _git init_ - 
* _git add_ - tracking one file (filename) or all **( * )**
* _git commit_ - save changes to respository. (**-m**) allows for message abt commit to be included.  (**-a**) all changes
* _git status_ - determines the state of files.
* _git push origin master_ -  pushes changes from the local “master” branch to the remote repository named “origin”.
* _git clone_ - copied all versions of all files for a project.
* _git stash_ - temporarily removes changes and hides them so you have a clean directory without lossing the changes made. (**apply**) retrieves hidden changes. 
* _git remote_ - you can view short names of remote repositories. **(-v)** view all the remote URLs next to short names
