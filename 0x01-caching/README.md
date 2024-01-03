# Caching Project

This project implements various caching algorithms in Python, including Basic Cache, FIFO Cache, LIFO Cache, LRU Cache, MRU Cache, and LFU Cache.

## Table of Contents

- [Basic Cache](#basic-cache)
- [FIFO Cache](#fifo-cache)
- [LIFO Cache](#lifo-cache)
- [LRU Cache](#lru-cache)
- [MRU Cache](#mru-cache)
- [LFU Cache](#lfu-cache)
- [Usage](#usage)

## Basic Cache

The `BasicCache` class implements a simple caching system without any limits.

## FIFO Cache

The `FIFOCache` class extends the `BaseCaching` class and implements a caching system using the FIFO (First-In-First-Out) algorithm.

## LIFO Cache

The `LIFOCache` class extends the `BaseCaching` class and implements a caching system using the LIFO (Last-In-First-Out) algorithm.

## LRU Cache

The `LRUCache` class extends the `BaseCaching` class and implements a caching system using the LRU (Least Recently Used) algorithm.

## MRU Cache

The `MRUCache` class extends the `BaseCaching` class and implements a caching system using the MRU (Most Recently Used) algorithm.

## LFU Cache

The `LFUCache` class extends the `BaseCaching` class and implements a caching system using the LFU (Least Frequently Used) algorithm.

## Usage

To use any of the caching implementations, you can create an instance of the respective class and call the `put` and `get` methods as demonstrated in the individual files (e.g., `0-main.py`, `1-main.py`, etc.).

```python
# Example Usage
from basic_cache import BasicCache

my_cache = BasicCache()
my_cache.put("key", "value")
result = my_cache.get("key")
print(result)
```

Feel free to explore and experiment with different caching strategies for your specific use case.

**Note:** The provided examples are for educational purposes, and you may need to adapt them based on your specific requirements.

