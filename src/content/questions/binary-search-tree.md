---
title: "SSC CGL Reasoning: Blood Relations Practice Questions"
description: "Master blood relations questions for SSC CGL with detailed solutions and practice problems."
pubDate: "2024-12-10"
category: "SSC Exams"
tags: ["reasoning", "blood-relations", "ssc-cgl", "logical-reasoning"]
featured: false
difficulty: "medium"
readingTime: 8
author: "Eduware Team"
---

# SSC CGL Reasoning: Blood Relations Practice Questions

## Understanding Blood Relations

Blood relations questions are a crucial part of the reasoning section in SSC CGL. These questions test your ability to understand family relationships and solve problems based on given information.

## Basic Relationships

### Primary Relations:
- **Father/Mother**: First generation upward
- **Son/Daughter**: First generation downward  
- **Brother/Sister**: Same generation
- **Husband/Wife**: Spouse relationship

### Secondary Relations:
- **Grandfather/Grandmother**: Second generation upward
- **Grandson/Granddaughter**: Second generation downward
- **Uncle/Aunt**: Father's/Mother's siblings
- **Nephew/Niece**: Brother's/Sister's children

## Question Types

### Type 1: Direct Relationship Questions

**Question 1:** If A is the brother of B, and B is the sister of C, then what is the relationship between A and C?

**Solution:**
- A is brother of B (A = male, B = female)
- B is sister of C (B = female, C can be male or female)
- Since A and B are siblings, and B and C are siblings, A and C are also siblings
- **Answer:** A is the brother of C (assuming C is female) or A is the brother of C (if C is male)

**Question 2:** Pointing to a photograph, Raj said "She is the daughter of my grandfather's only son." How is the woman in the photograph related to Raj?

**Solution:**
- My grandfather's only son = My father
- Daughter of my father = My sister
- **Answer:** Sister

### Type 2: Coded Relationship Questions

**Question 3:** If 'A + B' means A is the mother of B, 'A - B' means A is the brother of B, 'A × B' means A is the father of B, and 'A ÷ B' means A is the sister of B, then what does P × Q + R mean?

**Solution:**
- P × Q means P is the father of Q
- Q + R means Q is the mother of R
- Combined: P is the father of Q, and Q is the mother of R
- **Answer:** P is the paternal grandfather of R

### Type 3: Complex Family Trees

**Question 4:** A is the father of B. C is the sister of B. D is the brother of E. E is the daughter of B. F is the mother of D. How is A related to D?

**Solution:**
Let's build the family tree:
- A is father of B
- C is sister of B (so A is also father of C)
- E is daughter of B (so B is parent of E)
- D is brother of E (so B is also parent of D)
- F is mother of D (so F is spouse of B)

Therefore: A → B → D (A is grandfather of D)
**Answer:** A is the grandfather of D

## Practice Questions with Solutions

### Question 5:
Introducing a boy, a girl said, "He is the son of the daughter of the father of my uncle." How is the boy related to the girl?

**Solution:**
- Father of my uncle = My grandfather
- Daughter of my grandfather = My mother or my aunt
- Son of my mother/aunt = My brother or my cousin
- **Answer:** Brother or Cousin

### Question 6:
If A + B means A is the son of B, A - B means A is the wife of B, A × B means A is the sister of B, and A ÷ B means A is the mother of B, then which of the following means P is the maternal uncle of Q?

Options:
a) P × R ÷ Q
b) P + R × Q
c) P - R ÷ Q  
d) P × R + Q

**Solution:**
For P to be maternal uncle of Q:
- P should be brother of Q's mother
- So we need: P is brother of someone who is mother of Q
- P × R means P is sister of R (wrong gender)
- We need P to be male sibling of Q's mother
- **Answer:** None of the given options correctly represent this relationship

### Question 7:
Looking at a portrait, Aditi said, "Anirudh is the father of my grandmother's daughter's niece." How is Anirudh related to Aditi?

**Solution:**
- My grandmother's daughter = My mother or my aunt
- My mother's niece = My female cousin (daughter of my mother's sibling)
- My aunt's niece = Myself or my sister (if aunt is my mother's sister)
- Father of my cousin/sister = My uncle or my father
- **Answer:** Father or Uncle

## Solving Strategy

### Step-by-Step Approach:
1. **Identify the relationships** mentioned in the question
2. **Draw a family tree** if the relationships are complex
3. **Work backwards** from the final relationship asked
4. **Use gender indicators** carefully (brother/sister, son/daughter)
5. **Double-check** your answer by tracing the relationships

### Common Mistakes to Avoid:
- Confusing paternal and maternal relationships
- Mixing up generations
- Ignoring gender specifications
- Making assumptions about unstated relationships

### Time-Saving Tips:
- Practice standard relationship patterns
- Use abbreviations (F=father, M=mother, S=son, D=daughter)
- Draw quick family trees for complex questions
- Remember that spouse relationships don't follow generational rules

## Expected Questions in SSC CGL:
- **Tier-I:** 2-3 questions typically
- **Difficulty:** Easy to Medium
- **Time allocation:** 1-2 minutes per question

Master these concepts with regular practice, and blood relations will become one of your strongest topics in the reasoning section!

A Binary Search Tree (BST) is a hierarchical data structure where:
- Each node has at most two children (left and right)
- Left subtree contains only nodes with values less than the parent
- Right subtree contains only nodes with values greater than the parent
- Both subtrees are also BSTs

## Node Structure

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BST:
    def __init__(self):
        self.root = None
```

## Insert Operation

```python
def insert(self, val):
    if not self.root:
        self.root = TreeNode(val)
    else:
        self._insert_recursive(self.root, val)

def _insert_recursive(self, node, val):
    if val < node.val:
        if node.left is None:
            node.left = TreeNode(val)
        else:
            self._insert_recursive(node.left, val)
    else:
        if node.right is None:
            node.right = TreeNode(val)
        else:
            self._insert_recursive(node.right, val)
```

## Search Operation

```python
def search(self, val):
    return self._search_recursive(self.root, val)

def _search_recursive(self, node, val):
    if not node or node.val == val:
        return node
    
    if val < node.val:
        return self._search_recursive(node.left, val)
    else:
        return self._search_recursive(node.right, val)
```

## Tree Traversals

### In-order Traversal (Left → Root → Right)
```python
def inorder(self, node, result):
    if node:
        self.inorder(node.left, result)
        result.append(node.val)
        self.inorder(node.right, result)
```

### Pre-order Traversal (Root → Left → Right)
```python
def preorder(self, node, result):
    if node:
        result.append(node.val)
        self.preorder(node.left, result)
        self.preorder(node.right, result)
```

### Post-order Traversal (Left → Right → Root)
```python
def postorder(self, node, result):
    if node:
        self.postorder(node.left, result)
        self.postorder(node.right, result)
        result.append(node.val)
```

## Delete Operation

The most complex operation, with three cases:
1. **Leaf node:** Simply remove it
2. **Node with one child:** Replace with its child
3. **Node with two children:** Replace with inorder successor

```python
def delete(self, val):
    self.root = self._delete_recursive(self.root, val)

def _delete_recursive(self, node, val):
    if not node:
        return node
    
    if val < node.val:
        node.left = self._delete_recursive(node.left, val)
    elif val > node.val:
        node.right = self._delete_recursive(node.right, val)
    else:
        # Node to be deleted found
        if not node.left:
            return node.right
        elif not node.right:
            return node.left
        
        # Node with two children
        successor = self._find_min(node.right)
        node.val = successor.val
        node.right = self._delete_recursive(node.right, successor.val)
    
    return node

def _find_min(self, node):
    while node.left:
        node = node.left
    return node
```

## Time Complexities

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Search    | O(log n)     | O(n)       |
| Insert    | O(log n)     | O(n)       |
| Delete    | O(log n)     | O(n)       |

## Common Interview Questions

1. **Validate BST:** Check if a binary tree is a valid BST
2. **Lowest Common Ancestor:** Find LCA of two nodes in BST
3. **Convert to Sorted Array:** Use inorder traversal
4. **Range Sum:** Sum all values in a given range

## Practice Tips

- Master recursive thinking for tree operations
- Understand the BST property thoroughly
- Practice tree traversals until they're second nature
- Consider iterative solutions for space optimization

BSTs are fundamental to many advanced data structures and algorithms!
