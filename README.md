# DEPRECATED

This Firehose project is no longer deployed to https://firehose.libraries.io

# The Libraries Firehose 

The Firehose is a streaming API that gives developers low latency access to Libraries’ activity without the overhead associated with polling a REST endpoint.

Each event constitues the release of a package in one of the supported platforms.

It implements the [HTML5 Server-Sent Events / EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).

Sample clients in the `examples` folder. And a running example [here](http://librariesio.github.io/firehose-stream/).

## Endpoint

`http://firehose.libraries.io/events`

Only the `http` is supported at the moment so if you connect from a secure page make sure to allow mixed content. CORS is supported.

## Event stream format

```
event: pkg
data: {"platform":"String","name":"String","version":"x.x.x","package_manager_url":"URLString","published_at":"ISString","project":{"name":"String","platform":"String","description":"String","homepage":"URLString","repository_url":"URLString","normalized_licenses":["String"],"latest_release_published_at":"ISOString","language":"String"}}
```

###### Example Data:

```json
{
  "platform":"Rubygems",
  "name":"bastion",
  "version":"3.0.1",
  "package_manager_url":"https://rubygems.org/gems/bastion/versions/3.0.1",
  "published_at":"2016-01-14T14:18:51.596Z",
  "project":{
    "name":"bastion",
    "platform":"Rubygems",
    "description":"Bastion provides a UI library of AngularJS based components designed to integrate and work with Foreman.",
    "homepage":"http://www.github.com/Katello/bastion",
    "repository_url":"https://github.com/Katello/bastion",
    "normalized_licenses":[
      "GPL-2.0"
    ],
    "latest_release_published_at":"2016-01-11T20:29:57.186Z",
    "language":"JavaScript"
  }
}
```

From the standard:

> The event stream is a simple stream of text data, which must be encoded using UTF-8. Each message is separated by a pair of newline characters. A colon as the first character of a line is, in essence, a comment, and is ignored.

More info [here](https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events#Event_stream_format).

## Try it

```
curl -i http://firehose.libraries.io/events
```
