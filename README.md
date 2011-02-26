SocialStream
============


The purpose of this project is to show on a TV a stream of tweets and messages on a Facebook wall together.

It does a Twitter search and a obtains the wall of a Facebook page. Both are hardcoded.

It refreshes the contents of the page every N seconds.

There's an administration view (via a huge link, so it can't be seen or memorized by people looking at it) which presents options to block certain messages and users from any service.

It's all done in Javascript except the piece that writes down which messages should be hidden, which is a small PHP script.

It was created for Google Chrome, although it almost works on Safari (currently doesn't sort).

This sometimes doesn't always work at the same way… Specially the block options.

This project was created by [Carlos Fonseca](http://about.me/carlosefonseca) for the [SINFO event](http://sinfo.ist.utl.pt).