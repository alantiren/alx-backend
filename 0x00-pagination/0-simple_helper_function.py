#!/usr/bin/env python3
"""
Module with a simple helper function for pagination
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of the start and end index for pagination.
    
    Arguments:
        - page: An integer representing the current page (1-indexed).
        - page_size: An integer representing the number of items per page.
    
    Returns:
        A tuple containing the start index and end index for the given page
        and page_size.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
