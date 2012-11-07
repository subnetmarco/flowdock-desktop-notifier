# Flowdock Desktop Notifier

A simple [Flowdock](http://flowdock.com) desktop notifier for Mac OSX.

# Dependencies

Execute from your Terminal ([Ruby](http://www.ruby-lang.org/) is **required**):

```
sudo gem install terminal-notifier
```

## Without Ruby

For those without ruby, you can download a [pre-built binary from GitHub](https://github.com/alloy/terminal-notifier/downloads) but to run terminal-notifier you have to point it to the binary inside the app bundle as so:

```
./terminal-notifier.app/Contents/MacOS/terminal-notifier
```

Then add the installation path in the `PATH` variable, so that the app can be run by simply executing:

```
$ terminal-notifier -message "Content" -title "Message Title"
``` 

# Installation

Execute from your Terminal:

```
sudo npm install flowdock-desktop-notifier -g
```

# Usage

Simply execute:

```
$ flowdock-notifier -u [USERNAME] -p [PASSWORD] -c [COMPANY] -f [FLOW]
```

With your [Flowdock](http://flowdock.com) username, password, company subdomain and flow name.