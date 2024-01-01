#!/usr/bin/env python3
"""
Module with pagination methods for a database of popular baby names.
"""
import csv
from typing import List, Tuple


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initializes a new Server instance.
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a paginated dataset based on the provided page and page_size.

        Arguments:
            - page: An integer representing the current page (1-indexed).
            - page_size: An integer representing the number of items per page.

        Returns:
            A list of rows representing the paginated dataset.
        """
        assert type(page) == int and type(page_size) == int
        assert page > 0 and page_size > 0
        start, end = index_range(page, page_size)
        data = self.dataset()
        if start > len(data):
            return []
        return data[start:end]
