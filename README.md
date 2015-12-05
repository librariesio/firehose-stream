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
data: {"platform":"Packagist","name":"miniframe/miniframe","version":"1.0.x-dev"}
```

From the standard:

> The event stream is a simple stream of text data, which must be encoded using UTF-8. Each message is separated by a pair of newline characters. A colon as the first character of a line is, in essence, a comment, and is ignored.

More info [here](https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events#Event_stream_format).

## Try it

```
curl -i http://firehose.libraries.io/events
```

