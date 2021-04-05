const Edge = require('./Edge');

class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }
}

module.exports = Vertex;