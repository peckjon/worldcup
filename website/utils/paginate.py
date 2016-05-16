def paginate(arr, page, offset):
    if page < 0:
        page = 1
    start = (page - 1) * offset
    end = start + offset
    if len(arr) < end:
        end = len(arr) - 1
    return arr[start:end]
