class SimpleServer {
    constructor() {
        this.routes = {}; // To store all routes and their corresponding handlers
    }

    on(method, path, handler) {
        this.routes[`${method.toUpperCase()} ${path}`] = handler;
    }

    handleRequest(method, path, body = null) {
        const routeKey = `${method.toUpperCase()} ${path}`;
        const handler = this.routes[routeKey];
            if (handler) {
                return handler({ method, path, body });
            } else {
                return { status: 404, body: "Not Found" };
            }
    }
}

const server = new SimpleServer();

server.on('GET', '/', () => {
    return { status: 200, body: 'Pure JS Server' };
});

server.on('POST', '/data', (req) => {
    return { status: 200, body: `Data received: ${JSON.stringify(req.body)}` };
});

server.on('DELETE', '/data', (req) => {
    return { status: 200, body: `Data ${req.body} deleted` };
})


console.log(server.handleRequest('Delete', '/data'));