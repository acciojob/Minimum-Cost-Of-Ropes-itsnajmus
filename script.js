// Get the input element
const input = document.querySelector('input[type="text"]');

// Get the button element
const button = document.querySelector('button');

// Get the result element
const result = document.querySelector('#result');

// Event listener for the button click
button.addEventListener('click', () => {
  // Get the input value and convert it into an array of integers
  const ropes = input.value.split(',').map(Number);
  
  // Create a priority queue to store the ropes
  const pq = new PriorityQueue();
  
  // Add all the ropes to the priority queue
  ropes.forEach(rope => pq.add(rope));
  
  let cost = 0;
  
  // Merge the ropes until there is only one rope left
  while (pq.size() > 1) {
    // Get the two smallest ropes
    const rope1 = pq.remove();
    const rope2 = pq.remove();
    
    // Merge the ropes
    const mergedRope = rope1 + rope2;
    
    // Add the cost of merging the ropes to the total cost
    cost += mergedRope;
    
    // Add the merged rope to the priority queue
    pq.add(mergedRope);
  }
  
  // Display the minimum cost of the ropes
  result.textContent = cost;
});

// Priority queue implementation
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }
  
  remove() {
    return this.items.shift();
  }
  
  size() {
    return this.items.length;
  }
}
