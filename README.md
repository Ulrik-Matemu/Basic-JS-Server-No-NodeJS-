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

MIT License

Copyright (c) 2024 Ulrik Matemu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Thank you for considering contributing to SimpleServer! As this is a personal project, here's how you can help:

1. **Bug Reports**
   - Open an issue describing the bug
   - Include steps to reproduce
   - Describe expected vs actual behavior

2. **Feature Suggestions**
   - Open an issue describing the feature
   - Explain why this feature would be useful
   - Discuss possible implementation approaches

3. **Pull Requests**
   - Fork the repository
   - Create a new branch for your feature
   - Write clear commit messages
   - Add tests if applicable
   - Update documentation as needed
   - Submit a pull request with a description of your changes

4. **Code Style**
   - Follow the existing code style
   - Use meaningful variable and function names
   - Add comments for complex logic

For any questions or discussions, feel free to [open an issue](https://github.com/Ulrik-Matemu/simple-server/issues).

