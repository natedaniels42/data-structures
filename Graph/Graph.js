const Vertex = require('./Vertex');
const Queue = require('../Queue');

class Graph {
    constructor(isWeighted = false, isDirected = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);
        return newVertex;
    }

    removeVertex(vertex) {
        if (!(vertex instanceof Vertex)) {
            throw Error('Must be a Vertex');
        } else {
            vertex.edges.map(edge => edge.end.removeEdge(vertex));
            this.vertices = this.vertices.filter(x => x !== vertex);
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!(vertex1 instanceof Vertex) || !(vertex2 instanceof Vertex)) {
            throw Error('Both must be Vertices');
        } else {
            const edgeWeight = this.isWeighted ? weight : null;
            vertex1.addEdge(vertex2, edgeWeight);
            if (!this.isDirected) {
                vertex2.addEdge(vertex1, edgeWeight);
            }
        }
    }

    removeEdge(vertex1, vertex2) {
        if (!(vertex1 instanceof Vertex) || !(vertex2 instanceof Vertex)) {
            throw Error('Both must be Vertices');
        } else {
            vertex1.removeEdge(vertex2);
            if (!this.isDirected) {
                vertex2.removeEdge(vertex1);
            }
        }
    }

    depthFirstTraversal(start, visitedVertices = [start]) {
        console.log(start.data);

        start.edges.forEach(edge => {
            const neighbor = edge.end;

            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                this.depthFirstTraversal(neighbor, visitedVertices);
            }
        })
    }

    breadthFirstTraversal(start) {
        const visitedVertices = [start];
        const visitQueue = new Queue();

        visitQueue.enqueue(start);
    
        while(!visitQueue.isEmpty()) {
            const current = visitQueue.dequeue().data;
            console.log(current.data);

            current.edges.forEach(edge => {
                const neighbor = edge.end;

                if (!visitedVertices.includes(neighbor)) {
                    visitedVertices.push(neighbor);
                    visitQueue.enqueue(neighbor);
                }
            })
        }
    }

    print() {
        this.vertices.map(vertex => vertex.print());
    }
}

module.exports = Graph;