# SimpleServer

A lightweight, pure JavaScript server implementation that provides a simple routing mechanism for handling HTTP-like requests.

## Features

- Simple and intuitive API
- Support for multiple HTTP methods (GET, POST, DELETE, etc.)
- Custom route handling
- Request body support
- Minimalist implementation with zero dependencies

## Installation

Simply copy the `SimpleServer` class into your project. No additional dependencies required.

## Usage

### Basic Setup

```javascript
const server = new SimpleServer();
```

### Defining Routes

Use the `on` method to define routes. The method accepts three parameters:
- `method`: HTTP method (GET, POST, DELETE, etc.)
- `path`: URL path
- `handler`: Function to handle the request

```javascript
server.on('GET', '/', () => {
    return { status: 200, body: 'Pure JS Server' };
});

server.on('POST', '/data', (req) => {
    return { status: 200, body: `Data received: ${JSON.stringify(req.body)}` };
});

server.on('DELETE', '/data', (req) => {
    return { status: 200, body: `Data ${req.body} deleted` };
});
```

### Handling Requests

Use the `handleRequest` method to process incoming requests:

```javascript
const response = server.handleRequest('GET', '/');
console.log(response); // { status: 200, body: 'Pure JS Server' }
```

### Request Object

The handler function receives a request object with the following properties:
- `method`: The HTTP method of the request
- `path`: The URL path
- `body`: The request body (if provided)

## API Reference

### `constructor()`

Creates a new instance of SimpleServer.

### `on(method, path, handler)`

Registers a new route handler.

- `method` (string): HTTP method
- `path` (string): URL path
- `handler` (function): Function to handle the request
- Returns: void

### `handleRequest(method, path, body)`

Processes an incoming request.

- `method` (string): HTTP method
- `path` (string): URL path
- `body` (any, optional): Request body
- Returns: Object with `status` and `body` properties

## Response Format

All handlers should return an object with the following structure:
```javascript
{
    status: number,  // HTTP status code
    body: any        // Response body
}
```

## Error Handling

If a route is not found, the server returns:
```javascript
{
    status: 404,
    body: "Not Found"
}
```

## Examples

### Basic GET Request
```javascript
server.on('GET', '/users', () => {
    return { status: 200, body: 'List of users' };
});

const response = server.handleRequest('GET', '/users');
// { status: 200, body: 'List of users' }
```

### POST Request with Body
```javascript
server.on('POST', '/users', (req) => {
    const userData = req.body;
    return { status: 200, body: `User created: ${JSON.stringify(userData)}` };
});

const response = server.handleRequest('POST', '/users', { name: 'John' });
// { status: 200, body: 'User created: {"name":"John"}' }
```

## License

[Add your preferred license here]

## Contributing

[Add contribution guidelines if applicable]