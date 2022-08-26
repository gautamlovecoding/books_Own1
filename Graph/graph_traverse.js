// BFS = Breadth first search (Ex. facebook request)
// BFT = Breadth first traversal
// DFS = Depth first search
//const Queue = require('../Stacks + Queues/queue/queue')
const Queue = require('./queue')
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

    addEdge(v, target, weight) {

        // this is adding edge from v to target v-> target
        this.adjList.get(v).push({target: target, wt: weight});

         // this is adding edge from target to v target-> v
         this.adjList.get(target).push(v)
    }

    printGraph() {
        const keys = this.adjList.keys();

        for(let key of keys) {
            console.log(key, '->', this.adjList.get(key));
        }
    }

    BFS(vertex){
        const queue = new Queue();
        let visited = {};

        queue.enQueue(vertex)
        visited[vertex] = true;

        while(!queue.isEmpty()) {
            const elem = queue.deQueue();
            console.log(elem)

            const vertices = this.adjList.get(elem);

            for(let vertex of vertices) {
                if(!visited[vertex]) {
                    queue.enQueue(vertex);
                    visited[vertex] = true;
                }
            }
        }
    }

    bft() {
        let visited = {};
        let disConnectedCount = 0
        for(let key of this.adjList.keys()) {
            if(!visited[key]) {
                disConnectedCount++
                this.BFS(key, visited);
            }
        }

        console.log(disConnectedCount)
    }

    dfs(vertex, visited = {}) {
        visited[vertex] = true;
        console.log(vertex)
        for(let vert of this.adjList.get(vertex)) {
        if(!visited[vert]) {
            this.dfs(vert, visited)
        }
      }
    }
    dijkstra(source = 'A') {
        let dist = [];
        for(let vertex of this.adjList.keys()) {
            dist[vertex] = Infinity
        }
        dist[source] = 0;
         // lesser number more priority
        pq = enqueue(source, 0);

        while(!pq.isEmpty()) {
            
           
            let source = pq.deQueue(); // return minimum distance source

            const sourceAdj = this.adjList.get(source.element);

            for(let curr of sourceAdj) {
                // relaxation
                if(dist[curr.target] > dist[source]+curr.wt) {
                    dist[curr.target] = dist[source] + curr.wt;
                    pq.enqueue(curr.target, dist[curr.target]);
                }
            }

        }
        return dist
    }
   
}

const graph = new Graph(5);

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
// graph.addVertex('F')
// graph.addVertex('G')

graph.addEdge('A','B', 4);
graph.addEdge('A','C', 1);
graph.addEdge('B','E', 4);
graph.addEdge('C','B', 2);
graph.addEdge('C','D', 4);
graph.addEdge('B','E', 4);

//graph.printGraph();

graph.BFS('A')


//graph.bft()

console.log("++++++++++=====")
graph.dfs('A')


// Time complexity = O(v+e)

console.log(graph.dijkstra())





