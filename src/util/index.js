exports.paginate = function(arr, limit, page){
    var res = [],
        begin = limit * page,
        end = begin + limit;

    if((arr.length / limit) < page){
        return -1;
    }

    if(end > arr.length){
        end = arr.length;
    }

    for(var i = begin; i < end; i++){
        res.push(arr[i]);
    }

    return res;
};