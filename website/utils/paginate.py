def paginate(arr, page, offset):
    if page != 1:
        start = page * offset
    else:
        start = 0
    end = start + offset
    if len(arr) < end:
        end = len(arr) - 1
    return arr[start:end]
