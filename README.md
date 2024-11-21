# Microservices communication Example

## Composition

The repo contains 3 micro services:

- Micro body (just have an input)
- Micro header (just have a "navbar")
- Micro host (render both micro services header and body)

This repo have a simple exemple on how to communicate between 2 microservices (in this case between body and header).

The [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method is used to send a message from the micro service _micro_body_ to _micro_header_

The _micro-header_ listens for this message by adding an event listener to the [message event](https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event). When the message arrives, it captures the information and renders it as part of the UI.

## Setup

Install the dependencies in the 3 projects with:

```bash
pnpm install
```

THen start the micro services with the command:

```bash
pnpm dev
```

**Note**: You need to start _micro_header_ and _micro_body_ in order to make _micro_host_ to work
