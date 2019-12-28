import Graph from './Graph'

function mst(source: Graph, dest: Graph) {
  const vStart = Object.keys(source.AdjList)[0]
  dest.addVertex(vStart)

  while (source.order > 0) {
    let min = {
      src: '',
      dest: '',
      weight: Infinity,
    }
    for (let vIn of Object.keys(dest.AdjList)) {
      if (!source.AdjList[vIn]) continue
      for (let vOut of Object.keys(source.AdjList[vIn])) {
        if (source.AdjList[vIn][vOut] < min.weight) {
          min.src = vIn
          min.dest = vOut
          min.weight = source.AdjList[vIn][vOut]
        }
      }
    }
    dest.addVertex(min.dest)
    dest.addEdge(min.src, min.dest, min.weight)
    source.removeEdge(min.src, min.dest)

    // remove all the edges to dest
    for (let v of Object.keys(dest.AdjList)) {
      if (!source.AdjList[v]) continue
      if (source.AdjList[v][min.dest]) source.removeEdge(v, min.dest)
    }

    for (let v of Object.keys(source.AdjList)) {
      if (source.AdjList[v].degree === 0) source.removeVertex(v)
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const g = new Graph()
  const h = new Graph()
  const vtcs = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
  ]
  for (let i = 0; i < vtcs.length; i++) {
    g.addVertex(vtcs[i])
  }
  g.addEdge('A', 'B', 8)
  g.addEdge('A', 'F', 3)
  g.addEdge('B', 'C', 33)
  g.addEdge('B', 'G', 91)
  g.addEdge('C', 'D', 42)
  g.addEdge('C', 'H', 72)
  g.addEdge('D', 'E', 11)
  g.addEdge('D', 'I', 15)
  g.addEdge('E', 'J', 34)
  g.addEdge('F', 'G', 17)
  g.addEdge('F', 'K', 9)
  g.addEdge('G', 'H', 21)
  g.addEdge('G', 'L', 66)
  g.addEdge('H', 'I', 22)
  g.addEdge('H', 'M', 31)
  g.addEdge('I', 'J', 56)
  g.addEdge('I', 'N', 7)
  g.addEdge('J', 'O', 57)
  g.addEdge('K', 'L', 69)
  g.addEdge('K', 'P', 9)
  g.addEdge('L', 'M', 50)
  g.addEdge('L', 'Q', 11)
  g.addEdge('M', 'N', 4)
  g.addEdge('M', 'R', 32)
  g.addEdge('N', 'O', 15)
  g.addEdge('N', 'S', 33)
  g.addEdge('O', 'T', 84)
  g.addEdge('P', 'Q', 91)
  g.addEdge('P', 'U', 17)
  g.addEdge('Q', 'R', 27)
  g.addEdge('Q', 'V', 31)
  g.addEdge('R', 'S', 92)
  g.addEdge('R', 'W', 30)
  g.addEdge('S', 'T', 81)
  g.addEdge('S', 'X', 29)
  g.addEdge('T', 'Y', 82)
  g.addEdge('U', 'V', 1)
  g.addEdge('V', 'W', 41)
  g.addEdge('W', 'X', 5)
  g.addEdge('X', 'Y', 31)
  mst(g, h)
  console.log(g, h)
})
