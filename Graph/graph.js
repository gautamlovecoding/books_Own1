// graph is the set of vertices and edges
// two types are graph 1. directed(where direction is given)   2. undirected(there is no direction)
// no cyclic graph is called tree.
// 1. wightage graph(where weight is given)  
// real life examples of graphs = google map, routing, facebook(friend suggestion)
// degree of vertex = total numbers of incident edges).
// complete graph = where each vertex is directly conneced with other each vertex\
// forest = set of tree

// we can implement graph using adjacency list and adjacency matrix.

class Graph{

    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        // represented whole graph
        this.adjList = new Map();
    }

    addVertex(v) {
        // add vertex in graph
        this.adjList.set(v,[]);
    }

    addEdge(v, target) {

        // this is adding edge from v to target v-> target
        this.adjList.get(v).push(target)

         // this is adding edge from target to v target-> v
         this.adjList.get(target).push(v)
    }

    printGraph() {
        const keys = this.adjList.keys();

        for(let key of keys) {
            console.log(key, '->', this.adjList.get(key));
        }
    }
}

const graph = new Graph(5);

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','E');
graph.addEdge('B','E');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('C','D');

graph.printGraph();




