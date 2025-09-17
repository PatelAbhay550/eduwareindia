---
title: "Two Sum Problem - Array Algorithm"
description: "Learn how to solve the classic Two Sum problem using different approaches including brute force and hash map optimization."
pubDate: 'June 27, 2025'
category: "algorithms"
tags: ["arrays", "hash-map", "leetcode", "easy"]
featured: true
difficulty: "easy"
readingTime: 8
author: "Eduware Team"
---

# Two Sum Problem - Array Algorithm

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Approach 1: Brute Force

The simplest approach is to check every pair of numbers:

```python
def two_sum_brute_force(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

**Time Complexity:** O(n²)  
**Space Complexity:** O(1)

## Approach 2: Hash Map (Optimized)

We can use a hash map to store numbers we've seen and their indices:

```python
def two_sum_optimized(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

## Key Insights

1. **Hash Map Lookup:** Using a dictionary allows O(1) average lookup time
2. **Single Pass:** We only need to iterate through the array once
3. **Complement Logic:** For each number, we look for its complement (target - current number)

## Practice Tips

- Start with the brute force solution to understand the problem
- Optimize by identifying repeated work
- Consider space-time tradeoffs
- Test with edge cases like duplicate numbers

This problem is a great introduction to hash map optimization techniques commonly used in coding interviews.
