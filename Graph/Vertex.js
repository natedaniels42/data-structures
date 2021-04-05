const Edge = require('./Edge');

class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    addEdge(vertex, weight = null) {
        if (!(vertex instanceof Vertex)) {
            throw Error('Must be a Vertex');
        } else {
            this.edges.push(new Edge(this, vertex, weight));
        }
    }

    print() {
        const edgeList = this.edges.map(edge => edge.weight ? `${edge.end.data} (${edge.weight})` : `${edge.end.data}`);
        console.log(`${this.data} --> ${edgeList.join(', ')}`);
    }
}

module.exports = Vertex;